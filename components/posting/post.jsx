import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BreifContent, FinalContent } from './breifContent';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Passage } from './passage';
import Loading from '@/app/[locale]/loading';

const LanguageForm = () => {
  const methods = useForm()
  const router = useRouter()
  const [result ,setResult] = useState(null)
  const [currentStep, setCurrentStep] = useState(1);


  const handleSubmit = async (data) => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep == 3) {
      const info = await axios.post(`${process.env.API_URL}/api/programs`, data)
      setResult(info.data.programResult)
    }
    else {
      return;
    }
  }

  useEffect(()=>{
    if(result?._id){
      router.push(`${process.env.API_URL}/dashboard/context/${result._id}`)
    }
  },[router,result])

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BreifContent />
        );
      case 2:
        return (
          <FinalContent />
        );
      case 3:
        return(

          <Passage />
        )
      default:
        return <Loading/>  
    }
  };

  return (
    <div className="flex sm:flex-row flex-col h-fit sm:mix-h-screen w-11/12 mx-auto pt-5" dir='ltr'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="w-full">
          {renderFormStep()}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          >
            {currentStep === 3 ? 'Submit' : 'Next'}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LanguageForm;