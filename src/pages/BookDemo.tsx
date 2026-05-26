import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
    Building2,
    Phone,
    User,
    CheckCircle2,
    AlertCircle,
    Loader2,
    ArrowLeft,
    ChevronsUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { countryCodes } from "@/data/countryCodes";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/* ---------------- VALIDATION ---------------- */
const formSchema = z.object({
    business_name: z.string().min(1, "Business name is required"),
    name: z.string().min(1, "Name is required"),
    country_code: z.string().min(1, "Country code is required"),
    mobile: z.string().regex(/^\d{7,15}$/, "Please enter a valid mobile number"),
});

type FormData = z.infer<typeof formSchema>;

export default function BookDemo() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [open, setOpen] = useState(false);

    const defaultCountry =
        countryCodes.find((c) => c.iso === "IN") || countryCodes[0];

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            business_name: "",
            name: "",
            country_code: defaultCountry.code,
            mobile: "",
        },
    });

    const selectedCountryCode = watch("country_code");
    const selectedCountry = countryCodes.find(
        (c) => c.code === selectedCountryCode
    );

    /* ---------------- SUBMIT ---------------- */
    const onSubmit = async (data: FormData) => {
        if (!BACKEND_URL) {
            toast.error("Backend URL missing (.env)");
            return;
        }

        setIsSubmitting(true);

        try {
            const submitData = {
                ...data,
                full_mobile: `${data.country_code}-${data.mobile}`,
            };


            // 🔥 IMPORTANT: no-cors for Google Apps Script
            await fetch(BACKEND_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            });

            // Always treat as success
            setIsSuccess(true);
            toast.success("Demo booked successfully! We'll contact you soon.");

            setTimeout(() => {
                navigate("/");
            }, 3000);

        } catch (error) {
            console.error(error);
            toast.error("Failed to book demo. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F3F5F9] font-sans flex flex-col">
            {/* Top Header */}
            <div className="w-full max-w-[500px] mx-auto py-6 flex justify-between items-center px-4 md:px-0">
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
                <Link to="/">
                    <img
                        src="originals/logo.png"
                        alt="Mapzo AI"
                        className="h-8 w-auto mix-blend-multiply"
                    />
                </Link>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center p-4 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[500px] bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-10"
                >
                    {/* Header inside card */}
                    <div className="mb-8">
                        <h1 className="text-[2rem] font-bold text-[#1A1D23] leading-tight mb-3">
                            Book a <span className="text-[#6366F1]">Live Demo</span>
                        </h1>
                        <p className="text-[#64748B] text-[0.95rem] leading-relaxed">
                            Experience how Mapzo AI can automate your local SEO and boost your GMB ranking.
                        </p>
                    </div>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h2>
                            <p className="text-gray-500">
                                We'll be in touch with you shortly to schedule your demo.
                            </p>
                            <Button
                                onClick={() => navigate("/")}
                                variant="outline"
                                className="mt-8 rounded-xl w-full h-12 border-2"
                            >
                                Back to Home
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Business Name */}
                            <div className="space-y-2">
                                <Label className="text-[#1A1D23] font-semibold text-sm flex items-center gap-2 mb-1.5">
                                    <Building2 className="w-4 h-4" />
                                    Business Name    (preferred GMB Name)
                                </Label>
                                <Input
                                    {...register("business_name")}
                                    placeholder="Enter your business name"
                                    className={`h-12 rounded-xl border-[#E2E8F0] bg-white text-base px-4 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-0 transition-all ${errors.business_name ? 'border-red-500' : ''}`}
                                />
                                {errors.business_name && (
                                    <p className="text-xs text-red-500 flex items-center mt-1">
                                        <AlertCircle className="w-3 h-3 mr-1" />
                                        {errors.business_name.message}
                                    </p>
                                )}
                            </div>

                            {/* Name */}
                            <div className="space-y-2">
                                <Label className="text-[#1A1D23] font-semibold text-sm flex items-center gap-2 mb-1.5">
                                    <User className="w-4 h-4" />
                                    Your Name
                                </Label>
                                <Input
                                    {...register("name")}
                                    placeholder="Enter your full name"
                                    className={`h-12 rounded-xl border-[#E2E8F0] bg-white text-base px-4 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-0 transition-all ${errors.name ? 'border-red-500' : ''}`}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500 flex items-center mt-1">
                                        <AlertCircle className="w-3 h-3 mr-1" />
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <Label className="text-[#1A1D23] font-semibold text-sm flex items-center gap-2 mb-1.5">
                                    <Phone className="w-4 h-4" />
                                    Mobile Number
                                </Label>

                                <div className={`flex items-center h-12 rounded-xl border bg-white overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#6366F1] focus-within:border-[#6366F1] ${errors.mobile ? 'border-red-500' : 'border-[#E2E8F0]'}`}>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                type="button"
                                                className="h-full px-3 rounded-none border-r border-gray-100 hover:bg-gray-50 text-base font-normal min-w-[100px] justify-between text-[#1A1D23]"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span>{selectedCountry?.iso}</span>
                                                    <span className="text-gray-500">{selectedCountry?.code}</span>
                                                </span>
                                                <ChevronsUpDown className="h-4 w-4 text-gray-400 ml-1" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0 w-[300px]" align="start">
                                            <Command>
                                                <CommandInput placeholder="Search country..." />
                                                <CommandGroup className="max-h-[250px] overflow-y-auto">
                                                    {countryCodes.map((c) => (
                                                        <CommandItem
                                                            key={c.code}
                                                            value={`${c.name} ${c.code}`}
                                                            onSelect={() => {
                                                                setValue("country_code", c.code);
                                                                setOpen(false);
                                                            }}
                                                            className="flex items-center gap-3 py-2.5 cursor-pointer"
                                                        >
                                                            <span className="text-xl">{c.flag}</span>
                                                            <span className="flex-1 text-sm">{c.name}</span>
                                                            <span className="text-sm text-muted-foreground">{c.code}</span>
                                                            {selectedCountryCode === c.code && (
                                                                <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                                                            )}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                                <CommandEmpty>No country found</CommandEmpty>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                    <input
                                        {...register("mobile")}
                                        className="flex-1 h-full px-4 text-base bg-transparent border-none outline-none placeholder:text-gray-400 text-[#1A1D23]"
                                        placeholder="Mobile number"
                                    />
                                </div>

                                {errors.mobile && (
                                    <p className="text-xs text-red-500 flex items-center mt-1">
                                        <AlertCircle className="w-3 h-3 mr-1" />
                                        {errors.mobile.message}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className="w-full h-14 text-lg font-bold rounded-xl bg-[#81A1F8] hover:bg-[#6D93F5] text-white shadow-lg transition-all transform active:scale-[0.99] mt-2"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Submitting...
                                    </div>
                                ) : (
                                    "Book My Free Demo"
                                )}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
