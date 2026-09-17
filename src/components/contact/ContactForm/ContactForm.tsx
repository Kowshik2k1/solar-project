"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import contact from "@/data/contact.json";

import {
  Section,
  Container,
  FormWrapper,
  FormHeader,
  Eyebrow,
  Title,
  Description,
  Form,
  FieldGroup,
  Field,
  Label,
  Input,
  Select,
  Textarea,
  ErrorMessage,
  SubmitButton,
  SubmitArrow,
} from "./style";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number"),

  location: z
    .string()
    .trim()
    .min(2, "Please enter your location"),

  projectType: z
    .string()
    .min(1, "Please select a project type"),

  electricityBill: z
    .string()
    .optional(),

  message: z
    .string()
    .trim()
    .min(10, "Please provide some details about your enquiry"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Contact form submitted:", data);

    // Resend API integration will be added next.
  };

  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormHeader>
            <Eyebrow>{contact.form.eyebrow}</Eyebrow>

            <Title>{contact.form.title}</Title>

            <Description>{contact.form.description}</Description>
          </FormHeader>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <Label htmlFor="name">
                  Name <span>*</span>
                </Label>

                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                />

                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </Field>

              <Field>
                <Label htmlFor="email">
                  Email <span>*</span>
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />

                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <Label htmlFor="phone">
                  Phone <span>*</span>
                </Label>

                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  {...register("phone")}
                />

                {errors.phone && (
                  <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
              </Field>

              <Field>
                <Label htmlFor="location">
                  Location <span>*</span>
                </Label>

                <Input
                  id="location"
                  type="text"
                  placeholder="City / Location"
                  {...register("location")}
                />

                {errors.location && (
                  <ErrorMessage>{errors.location.message}</ErrorMessage>
                )}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <Label htmlFor="projectType">
                  Project Type <span>*</span>
                </Label>

                <Select
                  id="projectType"
                  defaultValue=""
                  {...register("projectType")}
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  {contact.form.projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>

                {errors.projectType && (
                  <ErrorMessage>
                    {errors.projectType.message}
                  </ErrorMessage>
                )}
              </Field>

              <Field>
                <Label htmlFor="electricityBill">
                  Approx. Monthly Electricity Bill
                </Label>

                <Input
                  id="electricityBill"
                  type="text"
                  placeholder="e.g. ₹10,000 - ₹20,000"
                  {...register("electricityBill")}
                />
              </Field>
            </FieldGroup>

            <Field>
              <Label htmlFor="message">
                Message <span>*</span>
              </Label>

              <Textarea
                id="message"
                rows={6}
                placeholder="Tell us about your project or enquiry..."
                {...register("message")}
              />

              {errors.message && (
                <ErrorMessage>{errors.message.message}</ErrorMessage>
              )}
            </Field>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Enquiry"}

              {!isSubmitting && (
                <SubmitArrow aria-hidden="true">→</SubmitArrow>
              )}
            </SubmitButton>
          </Form>
        </FormWrapper>
      </Container>
    </Section>
  );
}