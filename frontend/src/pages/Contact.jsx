import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import { useRef, useEffect, useState } from 'react';

// components
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

// icons
import { HiOutlineMapPin, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formspreeId);
  const [interest, setInterest] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully! 🎉', {
        position: 'top-right',
        theme: 'dark',
      });

      // Reset form inputs
      formRef.current?.reset();
      setInterest('');

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  }, [state.succeeded]);

  const MotionElem = motion.section;

  return (
    <MotionElem
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-full flex items-center"
    >
      <ToastContainer />

      <div className="container mx-auto w-full max-h-[80vh] py-10 flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  I'm always open to collaboration, freelance gigs, or just a
                  good old chat. Fill out the form — let's make it happen. 👍
                </p>
              </div>
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+88 01943-505039</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>thedevshanto@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="flex-1">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="service">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select
                    value={interest}
                    onValueChange={setInterest}
                    name="service"
                    required
                  >
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="frontend">Frontend Design</SelectItem>
                      <SelectItem value="backend">
                        Backend Development
                      </SelectItem>
                      <SelectItem value="webpage">Webpage Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-lg btn-accent"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MotionElem>
  );
};

export default Contact;
