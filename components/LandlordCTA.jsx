"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Loader2, CheckCircle } from "lucide-react"

export default function LandlordCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm({
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSuccess(true)
    setIsSubmitting(false)

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
      form.reset()
    }, 5000)
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-[#0e0b36] text-white py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-xl w-full text-center">
        <motion.p
          className="text-[#8a7eef] mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          No Spam Promise
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Are you a landlord?
        </motion.h1>

        <motion.p
          className="text-lg mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Discover ways to increase your home's value and get listed. No Spam.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mb-6">
                  <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,104,248,0.3)]">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-grow m-0">
                          <FormControl>
                            <Input
                              placeholder="Enter your email address"
                              className="border-0 text-gray-700 focus:ring-2 focus:ring-[#7c68f8] h-12 text-base"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="bg-[#7c68f8] hover:bg-[#6a57e3] active:bg-[#5a48d0] text-white font-medium py-3 px-6 rounded-md h-12 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                      disabled={isSubmitting || isSuccess}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting
                        </>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Submitted!
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>

              {isSuccess && (
                <motion.div
                  className="bg-green-600 text-white p-3 rounded-md mt-4 flex items-center justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>Thank you for joining our community of landlords!</span>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          className="text-sm text-gray-300 mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Join <span className="font-semibold">10,000+</span> other landlords in our estatery community.
        </motion.p>
      </div>
    </motion.div>
  )
}
