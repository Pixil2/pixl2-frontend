import React from 'react';
import useForm from '../../hooks/useForm';

export default function PopUp({ image }) {
  console.log(image);
  const { formState, formError, handleFormChange, setFormError } = useForm({
    title: image?.title,
    height: image?.height,
    width: image?.width,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, height, width } = formState;
    try {
      setFormError('');
      if (!title) throw new Error('Please enter a title');
      await onSubmit(title, height, width);
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formState.title}
          onChange={handleFormChange}
        />
        <label>Height: </label>
        <input
          id="height"
          type="number"
          name="height"
          value={formState.height}
          onChange={handleFormChange}
        />
        <label>Width: </label>
        <input
          id="width"
          type="number"
          name="width"
          value={formState.width}
          onChange={handleFormChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
