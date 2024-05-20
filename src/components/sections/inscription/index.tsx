"use client"

import Title from "@/components/ui/title";
import React, { useState } from "react";
import Form from "./form";
import useCustomFormik from "@/hooks/useCustomFormik";

export default function Inscription() {

  const [preferenceId, setPreferenceId] = useState<string>();

  const onPreferenceSubmit = (preferenceId: string) => {
    setPreferenceId(preferenceId);
  };

  const formik = useCustomFormik({ onSubmit : onPreferenceSubmit })
  const firstName = formik.values.firstName
  const lastName = formik.values.lastName;
  const DNI = formik.values.DNI;
  const email = formik.values.email
  const phone = formik.values.phone



  return (

      <section
        id="inscripcion"
        className="flex min-h-screen w-full flex-col items-start justify-center gap-y-8 bg-primary px-6 lg:px-20 2xl:px-28"
      >
        <Title title="Inscripción" />
        <Form formik={formik}/>
      </section>
  );
}
