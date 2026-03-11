"use client";
// app/components/ContactForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Send, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/app/lib/validations";
import { cn } from "@/app/lib/utils";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.error ?? "Error al enviar. Intenta de nuevo.");
        return;
      }

      toast.success("¡Mensaje enviado! Te contactaré pronto 🚀");
      reset();
    } catch {
      toast.error("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = cn(
    "w-full bg-slate-900/50 border border-slate-700/50 rounded px-4 py-3",
    "font-mono text-sm text-slate-200 placeholder-slate-600",
    "focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20",
    "transition-colors duration-200"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <input
          {...register("name")}
          placeholder="Tu nombre"
          autoComplete="name"
          className={inputClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 font-mono text-[11px] text-red-400 tracking-wider">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="tu@email.com"
          autoComplete="email"
          className={inputClass}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 font-mono text-[11px] text-red-400 tracking-wider">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Cuéntame sobre tu proyecto..."
          className={cn(inputClass, "resize-none")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 font-mono text-[11px] text-red-400 tracking-wider">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-3 px-6 rounded",
          "font-mono text-[12px] tracking-[3px] uppercase font-bold",
          "bg-gradient-to-r from-brand-cyan to-brand-indigo text-[#020817]",
          "transition-opacity duration-200",
          isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:opacity-85"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={14} />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
