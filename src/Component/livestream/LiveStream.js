import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const LiveStream = React.forwardRef((props, ref) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs.send(process.env.REACT_APP_SERVICE_KEY,process.env.REACT_APP_TEMPLATE_KEY, values, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          alert('Message Sent Successfully');
          resetForm();
        }, (error) => {
          alert('An error occurred, please try again');
        });
    }
  });

  return (
    <section ref={ref} className="min-h-screen mt-28 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6 mt-24"
      >
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          Contact Us
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xl font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="you@example.com"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="message" className="block text-xl font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your message"
              {...formik.getFieldProps('message')}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-2 text-xl font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-sm hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
});

export default LiveStream;
