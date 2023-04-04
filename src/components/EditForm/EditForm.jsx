/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import styles from './editform.module.css'

const EditForm = ({ mutate, data }) => (
  <div>
    <Formik
      initialValues={data}
      validationSchema={
                Yup.object().shape({
                  firstName: Yup.string()
                    .min(2, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('Required'),
                  lastName: Yup.string()
                    .min(2, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('Required'),
                  email: Yup.string().email('Invalid email').required('Required'),
                })
            }
      onSubmit={(values) => {
        console.log(values)
        mutate(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label>
            Имя
            <Field name="firstName" id="firstName" className={styles.field} />
            {errors.firstName && touched.firstName ? (
              <div className={styles.error}>{errors.firstName}</div>
            ) : null}
          </label>

          <label>
            Фамилия
            <Field name="lastName" id="lastName" className={styles.field} />
            {errors.lastName && touched.lastName ? (
              <div className={styles.error}>{errors.lastName}</div>
            ) : null}
          </label>

          <label>
            Email
            <Field name="email" id="email" type="email" className={styles.field} />
            {errors.email && touched.email ? (
              <div className={styles.error}>
                {errors.email}
              </div>
            ) : null}
          </label>

          <label>
            Никнейм
            <Field name="nickName" id="nickName" className={styles.field} />
            {errors.email && touched.email ? (
              <div className={styles.error}>
                {errors.nickName}
              </div>
            ) : null}
          </label>

          <label>
            Описание
            <Field name="description" id="description" className={styles.field} />
            {errors.email && touched.email ? (
              <div className={styles.error}>
                {errors.description}
              </div>
            ) : null}
          </label>

          <label>
            Телефон
            <Field name="phoneNumber" id="phoneNumber" className={styles.field} />
            {errors.email && touched.email ? (
              <div className={styles.error}>
                {errors.phoneNumber}
              </div>
            ) : null}
          </label>

          <label>
            Image
            <Field name="avatar" id="avatar" className={styles.field} />
            {errors.email && touched.email ? (
              <div className={styles.error}>
                {errors.avatar}
              </div>
            ) : null}
          </label>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default EditForm
