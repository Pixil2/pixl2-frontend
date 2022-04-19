import React from 'react';
import useForm from '../../hooks/useForm';
import Header from '../Layout/Header';
import styles from '../../views/Canvas/Canvas.css';

export default function CanvasForm({ image, setCanvasInfo, setCreated }) {
  const { formState, formError, setFormState, handleFormChange, setFormError } =
    useForm({
      title: image?.title,
      size: image?.size,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formState', formState);
    try {
      const { title, size } = formState;
      setCanvasInfo(formState);
      setCreated(true);
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <div className={styles.CanvasForm}>
      <Header />
      <form className={styles.CanvasFormInputs} onSubmit={handleSubmit}>
        <p>
          Let's get started! Please give your artwork a title and a size (1 -
          50).
        </p>
        <label>Title: </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formState.title}
          onChange={handleFormChange}
        />
        <label>Size: </label>
        <input
          id="size"
          type="number"
          name="size"
          value={formState.size}
          onChange={handleFormChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
