<template lang='pug'>
.hyContent
  .formJoin
    .formJoin__container
      h3.formJoin__title JOIN HYDRA
      img.formJoin__img(src='@/assets/svgs/formLine.svg' loading='lazy' alt='line')
      form.formJoin__content
        label.formJoin__descr Let’s Build Your VR Experience
        p.formJoin__wrapper.formJoin__wrapperOne
          input.formJoin__lastNamee(type='text'  id='name' placeholder='First Name')
          input.formJoin__name(type='text'  id='lastName' placeholder='Last Name')
        p.formJoin__wrapper
          input.formJoin__email(type='email'  id='email' placeholder='Emaill')
          input.formJoin__phone(type='tel'  id='phone' placeholder='Phone Number')
        p.formJoin__wrapper.formJoin__wrapperThree
          input.formJoin__sbj(type='text'  id='subject' placeholder='Subject')
        p.formJoin__wrapper
          textarea.formJoin__addText( id='message' placeholder='Tell Us Something...' )
        button.formJoin__submit(type='submit') SEND TO HYDRA
</template>

<style src='./_formJoin.scss' lang='scss'></style>
