import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import dayjs from 'dayjs';

const bookingSchema = object({
 resDate: date().min(new Date(), 'Fecha tiene que ser posterior al día de hoy').required('Fecha requerida'),
 resTime: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Hora requerida'),
 guests: number().min(1,'guests must be at least 1').max(16).required('Número de invitados requerido'),
 occasion: string().required(),
});

function BookingForm() {
  return (
   <>
     <Formik
      initialValues={{
       resDate: '',
       resTime: '',
       guests: '',
       occasion: '',
      }}
      validationSchema={bookingSchema}
      onSubmit={values => {console.log(values)}}
     >
       <Form style={{display: 'grid', maxwidth: '200px', gap: '20px', margin: '0 10rem 0 10rem'}}>
        <h1 style={{justifySelf: 'center'}}>Booking a Table</h1>

        <label htmlFor='resDate'>Choose date</label>
        <Field name='resDate' type='date'/>
        <ErrorMessage name='resDate'/>

       <label htmlFor='resTime'>Choose time</label>
       <Field name='resTime' as='select'>
         <option value=''>Selecciona tu horario</option>
         <option value='17:00'>17:00</option>
         <option value='18:00'>18:00</option>
         <option value='19:00'>19:00</option>
         <option value='20:00'>20:00</option>
         <option value='21:00'>21:00</option>
         <option value='22:00'>22:00</option>
       </Field>
       <ErrorMessage name='resTime'/>

       <label htmlFor="guests">Number of guests</label>
       <Field type='number' name='guests' placeholder='Numero de invitados' min='1'/>
       <ErrorMessage name='guests'/>


       <label htmlFor="occasion">Occasion</label>
       <Field as='select' name="occasion">
         <option value=''>Selecciona la ocasión</option>
         <option value='birthday'>Birthday</option>
         <option value='anniversary'>Anniversary</option>
       </Field>
       <ErrorMessage name='occasion'/>

       <Field type="submit" value="Make Your reservation" name='submit'/>
     </Form>
     </Formik>
   </>

  )
}

export default BookingForm