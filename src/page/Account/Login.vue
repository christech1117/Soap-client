<template lang="pug">
  #login
    .container
      .row
        .col-xs-12.col-sm-12.col-md-6.col-md-offset-3
          .panel
            img(src='https://christech1117.github.io/uploads/avatar.png', alt='')
            .section-header
              h1
                i.fa.fa-unlock-alt(aria-hidden='true')
                | 會員登入
            form(action='', method='')
              .form-group
                i.fa.fa-user-circle-o.fa-2x(aria-hidden='true')
                label.sr-only(for='email') 電子郵件
                input.form-control(type='email', placeholder='電子郵件')
              .form-group
                i.fa.fa-key.fa-2x(aria-hidden='true')
                label.sr-only(for='password') 密碼
                input.form-control(type='password', placeholder='您的密碼')
              router-link(:to="{ path: '/' }")
                button.btn.btn-primary.btn-lg.btn-block(type='submit') 登入
              router-link(:to="{ path: '/register' }")
                button.btn.btn-success.btn-lg.btn-block(type='button') 註冊會員
              router-link(:to="{ path: '/forgetPass' }")
                button.btn.btn-link.btn-block(type='button') 忘記密碼?
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

</style>
