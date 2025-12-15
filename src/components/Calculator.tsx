import { useState } from "react";
import { Calculator as CalcIcon, IndianRupee, AlertCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CalculationResult {
    cancellationCharge: number | string;
    refundAmount: number | string;
    explanation: string;
}

const BASE_CHARGES: Record<string, number> = {
    "1A/EC": 240,
    "2A/FC": 200,
    "3A/CC/3E": 180,
    "SL": 120,
    "2S": 60,
};

const Calculator = () => {
    const [trainClass, setTrainClass] = useState<string>("");
    const [bookingStatus, setBookingStatus] = useState<string>("");
    const [timing, setTiming] = useState<string>("");
    const [ticketCost, setTicketCost] = useState<string>("");
    const [isTatkal, setIsTatkal] = useState(false);
    const [isTrainCancelled, setIsTrainCancelled] = useState(false);
    const [result, setResult] = useState<CalculationResult | null>(null);

    const calculateRefund = () => {
        const fare = parseFloat(ticketCost) || 0;
        const baseCharge = BASE_CHARGES[trainClass] || 0;
        const clerkage = 60;

        let cancellationCharge: number | string = 0;
        let refundAmount: number | string = 0;
        let explanation = "";

        // Train cancelled by railways - full refund
        if (isTrainCancelled) {
            cancellationCharge = 0;
            refundAmount = fare > 0 ? fare : "Full Fare";
            explanation = "Train cancelled by railways - Full refund applicable";
            setResult({ cancellationCharge, refundAmount, explanation });
            return;
        }

        // Tatkal tickets
        if (isTatkal) {
            if (bookingStatus === "confirmed") {
                cancellationCharge = fare > 0 ? fare : "Full Fare";
                refundAmount = 0;
                explanation = "Confirmed Tatkal tickets are non-refundable";
            } else {
                // RAC/WL Tatkal
                cancellationCharge = clerkage;
                refundAmount = fare > 0 ? fare - clerkage : `Fare - ₹${clerkage}`;
                explanation = "RAC/Waitlisted Tatkal - Only clerkage charge of ₹60 deducted";
            }
            setResult({ cancellationCharge, refundAmount, explanation });
            return;
        }

        // Regular tickets
        if (bookingStatus === "confirmed") {
            switch (timing) {
                case "48+":
                    cancellationCharge = baseCharge;
                    refundAmount = fare > 0 ? fare - baseCharge : `Fare - ₹${baseCharge}`;
                    explanation = `More than 48 hours before departure - Base charge of ₹${baseCharge} deducted`;
                    break;
                case "48-12":
                    if (fare > 0) {
                        const deduction = Math.max(baseCharge, fare * 0.25);
                        cancellationCharge = Math.round(deduction);
                        refundAmount = Math.round(fare - deduction);
                        explanation = `48-12 hours before departure - 25% of fare deducted (Min ₹${baseCharge})`;
                    } else {
                        cancellationCharge = `25% (Min ₹${baseCharge})`;
                        refundAmount = "Enter fare to calculate";
                        explanation = `48-12 hours before departure - 25% of fare deducted (subject to min flat charge)`;
                    }
                    break;
                case "12-4":
                    if (fare > 0) {
                        const deduction = Math.max(baseCharge, fare * 0.5);
                        cancellationCharge = Math.round(deduction);
                        refundAmount = Math.round(fare - deduction);
                        explanation = `12-4 hours before departure - 50% of fare deducted (Min ₹${baseCharge})`;
                    } else {
                        cancellationCharge = `50% (Min ₹${baseCharge})`;
                        refundAmount = "Enter fare to calculate";
                        explanation = `12-4 hours before departure - 50% of fare deducted (subject to min flat charge)`;
                    }
                    break;
                case "<4":
                case "after-chart":
                    cancellationCharge = fare > 0 ? fare : "Full Fare";
                    refundAmount = 0;
                    explanation = timing === "<4"
                        ? "Less than 4 hours before departure - No refund"
                        : "After chart preparation - No refund (File TDR for special cases)";
                    break;
                default:
                    explanation = "Please select cancellation timing";
            }
        } else {
            // RAC or Waitlisted
            if (timing === "after-chart") {
                cancellationCharge = "TDR Required";
                refundAmount = "Depends on TDR";
                explanation = "RAC/Waitlisted after chart - File TDR for refund based on reason";
            } else {
                cancellationCharge = clerkage;
                refundAmount = fare > 0 ? fare - clerkage : `Fare - ₹${clerkage}`;
                explanation = `${bookingStatus === "rac" ? "RAC" : "Waitlisted"} ticket - Only clerkage of ₹${clerkage} deducted`;
            }
        }

        setResult({ cancellationCharge, refundAmount, explanation });
    };

    const isFormValid = trainClass && bookingStatus && timing;

    return (
        <section id="calculator" className="py-10 md:py-16">
            <div className="container">
                <div className="max-w-xl mx-auto">
                    {/* Calculator Card */}
                    <div className="irctc-card p-6 md:p-8">
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                                <CalcIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h2 className="font-display text-xl font-semibold text-foreground">
                                    Cancellation Details
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Fill in your ticket details
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="space-y-5">
                            {/* Train Class */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-foreground">Train Class</Label>
                                <Select value={trainClass} onValueChange={setTrainClass}>
                                    <SelectTrigger className="irctc-input w-full">
                                        <SelectValue placeholder="Select class" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-popover border-border">
                                        <SelectItem value="1A/EC">AC First / Executive (1A/EC)</SelectItem>
                                        <SelectItem value="2A/FC">AC 2 Tier / First Class (2A/FC)</SelectItem>
                                        <SelectItem value="3A/CC/3E">AC 3 Tier / Chair Car / 3E</SelectItem>
                                        <SelectItem value="SL">Sleeper (SL)</SelectItem>
                                        <SelectItem value="2S">Second Sitting (2S)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Booking Status */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-foreground">Booking Status</Label>
                                <Select value={bookingStatus} onValueChange={setBookingStatus}>
                                    <SelectTrigger className="irctc-input w-full">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-popover border-border">
                                        <SelectItem value="confirmed">Confirmed</SelectItem>
                                        <SelectItem value="rac">RAC</SelectItem>
                                        <SelectItem value="waitlisted">Waitlisted</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Cancellation Timing */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-foreground">Cancellation Timing</Label>
                                <Select value={timing} onValueChange={setTiming}>
                                    <SelectTrigger className="irctc-input w-full">
                                        <SelectValue placeholder="Select timing" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-popover border-border">
                                        <SelectItem value="48+">More than 48 hours before</SelectItem>
                                        <SelectItem value="48-12">48 - 12 hours before</SelectItem>
                                        <SelectItem value="12-4">12 - 4 hours before</SelectItem>
                                        <SelectItem value="<4">Less than 4 hours before</SelectItem>
                                        <SelectItem value="after-chart">After chart preparation</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Ticket Cost */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-foreground">
                                    Ticket Cost <span className="text-muted-foreground">(Optional)</span>
                                </Label>
                                <div className="relative">
                                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="number"
                                        placeholder="Enter fare amount"
                                        value={ticketCost}
                                        onChange={(e) => setTicketCost(e.target.value)}
                                        className="irctc-input pl-10"
                                    />
                                </div>
                            </div>

                            {/* Toggle Switches */}
                            <div className="space-y-4 pt-2">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                                    <div className="flex items-center gap-3">
                                        <Label htmlFor="tatkal" className="text-sm font-medium text-foreground cursor-pointer">
                                            Tatkal Ticket
                                        </Label>
                                    </div>
                                    <Switch
                                        id="tatkal"
                                        checked={isTatkal}
                                        onCheckedChange={setIsTatkal}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                                    <div className="flex items-center gap-3">
                                        <Label htmlFor="train-cancelled" className="text-sm font-medium text-foreground cursor-pointer">
                                            Train Cancelled by Railways
                                        </Label>
                                    </div>
                                    <Switch
                                        id="train-cancelled"
                                        checked={isTrainCancelled}
                                        onCheckedChange={setIsTrainCancelled}
                                    />
                                </div>
                            </div>

                            {/* Calculate Button */}
                            <Button
                                onClick={calculateRefund}
                                disabled={!isFormValid}
                                className="irctc-button w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Calculate Refund
                            </Button>
                        </div>

                        {/* Result */}
                        {result && (
                            <div className="mt-8 p-6 rounded-2xl bg-secondary/10 border border-secondary/30 animate-fade-in">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                                        <p className="text-sm text-muted-foreground mb-1">Cancellation Charge</p>
                                        <p className="font-display text-2xl font-bold text-foreground">
                                            {typeof result.cancellationCharge === "number" ? `₹${result.cancellationCharge}` : result.cancellationCharge}
                                        </p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-secondary/20 border border-secondary/30">
                                        <p className="text-sm text-muted-foreground mb-1">Refund Amount</p>
                                        <p className="font-display text-2xl font-bold text-secondary">
                                            {typeof result.refundAmount === "number" ? `₹${result.refundAmount}` : result.refundAmount}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/30">
                                    <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground">{result.explanation}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
