"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton'
}

 
const PatientForm = () => {
  const router = useRouter();  
  const [isLoading,setIsLoading] = useState(false);
    
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    },
  })
 
  
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Welcome...👋</h1>
            <p className="text-dark-700">Start with your first appointment.</p>
        </section>

        <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='name'
        label='Full name'
        placeholder='Mike Evans'
        iconSrc='/assets/icons/user.svg'
        iconAlt='user'
        />

        <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='email'
        label='Email'
        placeholder='evans@example.com'
        iconSrc='/assets/icons/email.svg'
        iconAlt='email'
        />

        <CustomFormField
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name='phone'
        label='Phone number'
        placeholder='+(30) 6977782304'
        />
      
      <SubmitButton isLoading={isLoading}>Dive In</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm