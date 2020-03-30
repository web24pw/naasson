<template>
  <section class="cases-item" ref="casesitem">
    <div class="cases-item-project" style="transform: translate3d(-4704px, 0px, 0px);">




      <div class="cases-item-project__item" style="width: 1176px; order: 3;"
           v-for="item in items"
           :key="item.id"
           @mousedown="mousedownSlide"
           @mouseup="mouseupSlide"
           @click="getPos($event)"
      >

          <slot
            name="content"
            :item="item"
          />

        <div class="_1s_Wk E2rkU _1legF">
          <picture class="_3YPgL _1s_Wk">
            <source
              srcset="/_next/static/images/cover_oncohelp_desktop-12792d8a7ce68560a90fd71ae64b68b7.jpg.webp 1x, /_next/static/images/cover_oncohelp_desktop-12792d8a7ce68560a90fd71ae64b68b7.jpg.webp 2x"
              class="_3YPgL _1s_Wk" type="image/webp">
            <source
              srcset="/_next/static/images/cover_oncohelp_desktop-73e6398402ffa1c094b9954d63f7af41.jpg 1x, /_next/static/images/cover_oncohelp_desktop-73e6398402ffa1c094b9954d63f7af41.jpg 2x"
              class="_3YPgL _1s_Wk" type="image/jpeg">
            <img src="/_next/static/images/cover_oncohelp_desktop-73e6398402ffa1c094b9954d63f7af41.jpg"
                 class="_3YPgL _1s_Wk"></picture>
          <picture class="_3vPoA"><img
            src="data:image/jpeg;base64,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"
            class="_3vPoA"></picture>
        </div>



      </div>



      <!--
      <div class="cases-item-project__item" style="width: 1176px; order: 4;">
        <div>
          <div class="_3SoPN">
            <article class="_3sftW"><h2 class="_2GMpW">Консультации с&nbsp;лучшими онкологами</h2>
              <div class="_2LmtP">
                <div class="_2LmtP">«Просто спросить» — сервис, который помогает людям, столкнувшимися с&nbsp;онкологическими
                  заболеваниями. Служба бесплатно подскажет как&nbsp;организовать качественное лечение.
                  Проект существует на&nbsp;пожертвования доноров: компаний, фондов и&nbsp;обычных людей.
                </div>
              </div>
              <div class="_1Lq5J">
                <div class="_2qHH0 _2lO4u"><a href="https://ask.nenaprasno.ru/" class="_3BJTg"
                                              target="_blank" rel="noopener noreferrer">
                  <svg width="30px" height="30px" class="_30WyJ _3gx8b">
                    <use xlink:href="#icon-GlobeIcon"></use>
                  </svg>
                  <div class="_2d64p">ask.nenaprasno.ru</div>
                </a></div>
              </div>
            </article>
            <div class="_1Xdhg">
              <div class="_3XS24 E2rkU _1legF">
                <picture class="_3YPgL _3XS24">
                  <source
                    srcset="/_next/static/images/2_oncohelp_filling_mobile-8aff729d2661061f1b3d9af6c0e8acb4.jpg.webp 1x, /_next/static/images/2_oncohelp_filling_mobile-8aff729d2661061f1b3d9af6c0e8acb4.jpg.webp 2x"
                    class="_3YPgL _3XS24" type="image/webp">
                  <source
                    srcset="/_next/static/images/2_oncohelp_filling_mobile-0da84f93090c3444a39d73f455fd2181.jpg 1x, /_next/static/images/2_oncohelp_filling_mobile-0da84f93090c3444a39d73f455fd2181.jpg 2x"
                    class="_3YPgL _3XS24" type="image/jpeg">
                  <img
                    src="/_next/static/images/2_oncohelp_filling_mobile-0da84f93090c3444a39d73f455fd2181.jpg"
                    class="_3YPgL _3XS24"></picture>
                <picture class="_3vPoA"><img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCACAAEgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwX/xAArEAABAwIFAgYDAQEAAAAAAAABAAIRAyESEyIxQVGRIzJSYXGBU2KS4QT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAATECEf/aAAwDAQACEQMRAD8A9w78x7LJc8DQ3EZ5MLopImJus5Vcw+taaQ/tMdb8I/v/ABdUWkYpuqE66YaI4dK2iII4kNJG8WUpkubLt55C0iDDHFznAiINrItogLlk+Ljn6XVc6xe0NwAm9x7KXmXVl8dEXAVaxE5Ucf6qKla00t4526qo6xeVVwza+EHJi203VfVqtcAKRItsg7KReVwFavImhx1XWk9z5lsRb5QbREQDtZZ19WrSIM6/1UxH1NW4TCPSEGMRjzNTEfUxbwjophHpCCa/1TX+q0iANroiII6oxjsLnAFM2n6290fTa/zBTIpAEYBB390GsxkTjbvG/KmbTmMbZ+UymRGHmUNGm52IsBPugCowiQ9sdZTNpxONvdTJphsYBEzCZNMGQ0A9eUGsxkxiE9JUFWmRIe3ruoKFMBukadlD/wA9IzoF7FBtr2uMNcCfYoo2mxhlrQPhEEe1xdIfhHwmB35D2WnzBDSAYsucVvWxBrC6ZzD2UwP/ACnsnietvZPF5e3sgYH8VT2WmAtGpxd9LPi21s97IM3l7OyDpKSo0mNRBKpNrEIEog4vJhEEdUawgOMT1UzqdtYuq6BcxA6rJy9iWdkFzad9QspnU/UFdG0sQBh2wn6Qaa4OGkyqoBG0D6S6CopdL9QgqKIgjhikESCs5LI8jVX4wdIBEcqTVgaWygoptGzGo2m1plrQCpNWfK35UxVvSzug6XS65g1uWM7pircNaftB0um4ggLDTVxDE1oHyuiCAewARVEHOoxhMumYixWMFKdjPyurmyuZoAvDjuPdUBSpk7Huhp04i8fK21sGSo6nII4KDOCnGx7rowANhuy5sohnlXVogKCoiICIiD//2Q=="
                  class="_3vPoA"></picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cases-item-project__item" style="width: 1176px; order: 5;">
        <div class="_32yjM" style="background-color: rgb(60, 84, 238);">
          <div class="lKeJQ">
            <div class="_2Cgmk">
              <picture class="_1RTH_">
                <source
                  srcset="data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAAPwAADwAAQUxQSIEAAAABT6AmkiQ1ekwKLrrsyddHRICtr6+nCGwi23bymEFAdJBrOjqQgQIGA6mlo87P7o/3OYjovyK3bRvm1J20fQVRu0w5GQHmMPzMZ6agOUQPM/MYKGAOPRsRalgOh6nRsBwuU6dhObymWcNy+Ey7huUgJ2/Ip8g3kr+L/F3l/0L8rwgAVlA4IHoAAADQBACdASpAABAAPhkIg0EhBv6rAAQAYS0su9UDzBSqoArQRAAxD/2OaajJ/TTWQAD+/jOjC+P2L9KSW5iyylMa11m4UHWtpf/9d8///sYTU9fTreFA6ZBkw75p9Tn/+clnh80hOtv5+MIP84yqPlPhpwtRpMt4PcAAAA== 1x, data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAAPwAADwAAQUxQSIEAAAABT6AmkiQ1ekwKLrrsyddHRICtr6+nCGwi23bymEFAdJBrOjqQgQIGA6mlo87P7o/3OYjovyK3bRvm1J20fQVRu0w5GQHmMPzMZ6agOUQPM/MYKGAOPRsRalgOh6nRsBwuU6dhObymWcNy+Ey7huUgJ2/Ip8g3kr+L/F3l/0L8rwgAVlA4IHoAAADQBACdASpAABAAPhkIg0EhBv6rAAQAYS0su9UDzBSqoArQRAAxD/2OaajJ/TTWQAD+/jOjC+P2L9KSW5iyylMa11m4UHWtpf/9d8///sYTU9fTreFA6ZBkw75p9Tn/+clnh80hOtv5+MIP84yqPlPhpwtRpMt4PcAAAA== 2x"
                  class="_1RTH_" type="image/webp">
                <source
                  srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC 1x, data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC 2x"
                  class="_1RTH_" type="image/jpeg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC"
                  class="_1RTH_"></picture>
            </div>
            <div class="_2sD4x E2rkU _1legF">
              <picture class="_3YPgL _2sD4x">
                <source
                  srcset="/_next/static/images/main-oncohelp_desktop-fd5e3c44769fd6890a4c9de0d6d92f2b.jpg.webp 1x, /_next/static/images/main-oncohelp_desktop-fd5e3c44769fd6890a4c9de0d6d92f2b.jpg.webp 2x"
                  class="_3YPgL _2sD4x" type="image/webp">
                <source
                  srcset="/_next/static/images/main-oncohelp_desktop-d4bc57a00cbaa7383a5442613242eb95.jpg 1x, /_next/static/images/main-oncohelp_desktop-d4bc57a00cbaa7383a5442613242eb95.jpg 2x"
                  class="_3YPgL _2sD4x" type="image/jpeg">
                <img src="/_next/static/images/main-oncohelp_desktop-d4bc57a00cbaa7383a5442613242eb95.jpg"
                     class="_3YPgL _2sD4x"></picture>
              <picture class="_3vPoA"><img class="_3vPoA"></picture>
            </div>
          </div>
        </div>
      </div>
      <div class="cases-item-project__item" style="width: 1176px; order: 6;">
        <div class="HfycI" style="background-color: rgb(60, 84, 238);">
          <div class="_3Ucu1">
            <div class="_2gB3G">
              <div class="_1-b0G E2rkU _1legF">
                <picture class="_3YPgL _1-b0G">
                  <source
                    srcset="/_next/static/images/4.1-client_account_mobile-ba5958d7c7d1aaeac4597dae55cedc73.jpg.webp 1x, /_next/static/images/4.1-client_account_mobile-ba5958d7c7d1aaeac4597dae55cedc73.jpg.webp 2x"
                    class="_3YPgL _1-b0G" type="image/webp">
                  <source
                    srcset="/_next/static/images/4.1-client_account_mobile-d419ae5f832711df1ddc8d83cea73a29.jpg 1x, /_next/static/images/4.1-client_account_mobile-d419ae5f832711df1ddc8d83cea73a29.jpg 2x"
                    class="_3YPgL _1-b0G" type="image/jpeg">
                  <img
                    src="/_next/static/images/4.1-client_account_mobile-d419ae5f832711df1ddc8d83cea73a29.jpg"
                    class="_3YPgL _1-b0G"></picture>
                <picture class="_3vPoA"><img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCACAAEgDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMxAAAQMCAwYEBQMFAAAAAAAAAQACEQMhEhMxBCJBUVKRFGFxgQUjMjNTFUOSY6GxweH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAQEBAQADAAAAAAAAAAAAAAERAgMSIUH/2gAMAwEAAhEDEQA/APcOvGPJSXPA3G4jPEwrJA1Pmmpn2rIPrW+UP5ox1vwj+f8AxaoVRFN1Qnfphojg6VaEIE4kNJGsWSpkubLtZ4hUhBDHFznAiINrIVoQZVaDapJdP04bIFCHA5j7EmJ1RWpue4QRAVlriZDyPJUZ+H/qv7oyCDao7WblaYXR9Z7JBjus9kEDZ4/dfEXEpHZ3Xis4TK0wu6z2RgfH3D2QJlHA/FmPd5ErRS1pBu6VSgEIQgHOa0gEwSpzaZMYroqAFwmnigWSLGzGWY5oHnUuoJ5lPEW4hI1CDSYdWp5bcWLCMXNBGdS6xpKsFpBI4KcmnEYARyKoNDRAFkA0h0wDY8U4REaJoFZCA0DRCAJExN0g9rhIcCPVOATMXWMAAnIQa4m9Q7oxt6h3WWGL5FweaAwOdBowOZKDUOadHA+6MTeod1jB1NCTxungaSPkcOeiDYX0Kaxa5zRAoke60YSRvNwn1QUhCEAudpYZ36noV0LKKpFnsQRiYL43oxMJnHU1WzZjfIJ8lSDnxNBG/UtwRLIPzKi3TQZCswMF3EcyEzWYNZ7LRCCWva8mOCFSEAssBn7Te64Pim01qNdraby0YZt6rl8VtZAOdr6Ltz42zdZvT2cFjFMe5SLXEkljV4/itr/N/cLTY9r2h+102PqEgmCFb42TdPk9VlO+8xoCrLZ0q0Lg0jLZ0hNrGt0EKkIBCEIOTatip7U8Pc8ggRZY/pNH8j+4Xa+oxhh0+wRmsmP9Lc9OpMlTI4v0mj+R/cK6Pw6lRqtqB7iW8yF059ODY28k86njwTeJ0Vvp3f0yLkc0SOay8RTnj2Vse2oDhm3MLmqpHNEjmiEQgJHNCAQdIQgl4JP0NdbilBuMtsf5VF7Q8NJuVIrUzG+LoDDb7TEHEdabT7p5tPrCM2nP1iyB4GdDeyYAboAPRRnU+sJiqwmA4TyQWhCECAA0QmhB/9k="
                  class="_3vPoA"></picture>
              </div>
            </div>
            <div class="_2gB3G">
              <div class="_1-b0G E2rkU _1legF">
                <picture class="_3YPgL _1-b0G">
                  <source
                    srcset="/_next/static/images/4.2-consultation_mobile-efa9ff852c65dac3fd97f6c6c2672303.jpg.webp 1x, /_next/static/images/4.2-consultation_mobile-efa9ff852c65dac3fd97f6c6c2672303.jpg.webp 2x"
                    class="_3YPgL _1-b0G" type="image/webp">
                  <source
                    srcset="/_next/static/images/4.2-consultation_mobile-bb99a806f7d363e6003b1df1b0c28b23.jpg 1x, /_next/static/images/4.2-consultation_mobile-bb99a806f7d363e6003b1df1b0c28b23.jpg 2x"
                    class="_3YPgL _1-b0G" type="image/jpeg">
                  <img
                    src="/_next/static/images/4.2-consultation_mobile-bb99a806f7d363e6003b1df1b0c28b23.jpg"
                    class="_3YPgL _1-b0G"></picture>
                <picture class="_3vPoA"><img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCACAAEgDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAMxAAAQMCAwQIBgMBAQAAAAAAAQACEQMhBBIxEyJBkRQVUVJhcaHRBTIzQlPwI2KSouH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAHREBAQACAwEBAQAAAAAAAAAAAAECEQMTIfAxYf/aAAwDAQACEQMRAD8A9w68Y8Epc8DcbmM8TCckAwSJWqa9VIPrW/iH+0Z634R/v/xVQqhKbqhO/TDRHB0p0IQY4kNJGsWWUyXNl2s8QmQgRji5zgREG1kJ0IJ1KLajsxJBiLFL0cR87tZjgrElrSQJI4KPSH/hdpKuktkYcPmG89wN4g6Idhg773g8SNSt6Q+Cdg63BVY4vaSWlt4hNEylR6NJJdUeb9qfY2AFR4gAa9iCTm+5En+/oopmNyCMxd4lMkv/AH9Fm9P3+iBwCDrKFqEBP7CM37C5Mdin0ajKVOA518xEws+HY1+IL6dUDO3iOKiuzN+wif2EgqVONI666IbVeTGyI8yr6jcjCZyrWgNEAQEpqPExSJjxRtH/AIjzT0PPmifNIajwSBScY0vqs2z/AML0FJ8+SEyFBDE4SniC0vkOboQjDYSlhi5zBvO1KuhUR2dbKf5pPDdWinVn6v8AysBYAN50BaMsRncgoJAAJk9q1SBZPzORLZIzOQVQpAtP3OQC0RvOugqhCEHLisdTwrwx7XEkTZR63odypyHup/FMPVq12upsLhli3muNuDxLSCKTpC6cMMLjusW3b0Ot6Hcqch7o63odypyHuuDouJ/B6Bb0bE/g9AtdfH9Tdd3W9DuVOQ90db0O5U5D3XAMLiQI2HoEdFxM/Q9E6+P6m67+t6Hcqch7o63odypyHuuHo2Jj6HoEpweJJnYlOvjN162Fx1PFPLGNcCBN0Ll+F4erSrudUYWjLF/NC5+SSZajU/Hp3RdK6oxrsrnAFG1p99vNYU10XWbRkTnbrGvFZtacxnbPmga6LpRUYRIe2O2UbVkTnbzQNdF1m0ZMZhPZKwVaZEh7e3VA10LGva4w1wJ8ChBj2MeYcL+qwUKQBGQX18UlZlIvBqEyPFLs8Pa/C1ygtsmRGXjKDRpudmLAT4qWXDh1zBHisFPDk2dc2s5BXY0w2MgiZhGxpgyGgHt4pejUr2N/FNTospuzNmYi5QAoUwG7o3dFhw9IzuC9iqoQI2mxhlrQPJCdCBSGl1wC71QWNOrRyU6zaTnDaajQzCnkw0DeEafMg6cre6OSMrewclzmjhwIJ8NVXbU++EFEJNtTtvi+iYEOEgyEGqVWq2lTNR85R2KqVzQ4Q5ocOwqz+hKVRtVgeycp7UJwAAAAABwCFB//2Q=="
                  class="_3vPoA"></picture>
              </div>
            </div>
            <div class="_2gB3G">
              <div class="_1-b0G E2rkU _1legF">
                <picture class="_3YPgL _1-b0G">
                  <source
                    srcset="/_next/static/images/4.3-chat_mobile-7505cdb2dc37258d8d2530791f94fe2c.jpg.webp 1x, /_next/static/images/4.3-chat_mobile-7505cdb2dc37258d8d2530791f94fe2c.jpg.webp 2x"
                    class="_3YPgL _1-b0G" type="image/webp">
                  <source
                    srcset="/_next/static/images/4.3-chat_mobile-33f363ba4d34f18575637d03c1265af8.jpg 1x, /_next/static/images/4.3-chat_mobile-33f363ba4d34f18575637d03c1265af8.jpg 2x"
                    class="_3YPgL _1-b0G" type="image/jpeg">
                  <img src="/_next/static/images/4.3-chat_mobile-33f363ba4d34f18575637d03c1265af8.jpg"
                       class="_3YPgL _1-b0G"></picture>
                <picture class="_3vPoA"><img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCACAAEgDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMxAAAQMCAwUFCAIDAAAAAAAAAQACEQMSEyExQVFhcqIiUlOBkgQjMjNiY3GRoeFDZIL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGREBAQEAAwAAAAAAAAAAAAAAAAERAhIx/9oADAMBAAIRAxEAPwD0fbKvtTa9tBpLQNjZzXWXPFvYukZxvVeazquLWzdbxhXlymeEisR/hH9qxmMxC5MU+OeHZTxHQffedqx2i460LjNUzlX4xagVT4/SnaGOxC48U+P0rVt8yakj8J2hjYEyZCFDSSdUKy6ilnWMNm63jErRZ1zDZut4qcvFjAVM86w9Kd8nKt0oa+TGKCT9KWJ94elc2hiT/n/TUy+TlV8rUjUFuVYTy6p4kHOt0oC/L53SqFzxLamXKov+90rQVWAAF0n8INKYI1MnehNhnMbkLpx8ZqlnVMCZjyWiioCdDB3wnLwjDE+90oc/UYsHlVhj/E6UWVPE6VzaZ4g0xulMPnLFknTsrYZDNNBgKkGTVBG61XScHEw+7yhaJFwESdUFN1Qkwg5hC6cfGapzg0XOIA3lSatI61WftU8SzJodnoVFpge5pz+f6WkWGgiQck7ApLqkdljdN6LqkD3YnmUyLqrAiwKQ6odWAf8ASsExnkdyZDSsCVoVpFMhpAAIQhETUFzCLQ7gTCzNOMxQYTzLSoAWQWh2ehMLMUtmC2OZUOyMxRbv+JLCE50WepAp7cFkjMdpLC2YDSOZAxSEgGiyN8pWXOM0GcTcqFPSKTGwd6QpGSTTpwgbWlpltFs8HLUElouAB3AypwKXcCuAAANAgSEIQJ4uZFodnoTCyDCDOAzL6v6Wr23MItDuBKyw/wDXb6kAKQ20G/tFhExRYDzJ4cZii2eZI0tDgMJ4uQFhI+Q38XIFIFwuotA29pGERpQZ6kxSDndqi2DtlBukVGBS7gVwAABoECQhCBykXQhRUF2UkcQpbkWLvCLwsMM+I5Fh77ljtVxveEXhYYZj5j0GmfEcnamNiWnUIBAEDILHDPfcgszBLnnzTtTG4IKFDDKFuXYlaQlEoc0kyHQla6Pj/hVDt4It4JWO7/8ACYa4GbpG6FMhot4It4KkJkNTbwRbwVITIamI2IWdCk6lddULpMgbAhWyTwf/2Q=="
                  class="_3vPoA"></picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cases-item-project__item" style="width: 1176px; order: 0;">
        <div class="_1s_Wk E2rkU _1legF">
          <picture class="_3YPgL _1s_Wk">
            <source
              srcset="/_next/static/images/img_oncohelp_desktop-b637bd1019362f05ec761703b6a9eb53.jpg.webp 1x, /_next/static/images/img_oncohelp_desktop-b637bd1019362f05ec761703b6a9eb53.jpg.webp 2x"
              class="_3YPgL _1s_Wk" type="image/webp">
            <source
              srcset="/_next/static/images/img_oncohelp_desktop-97ee98a1b7619c4b16358958921a8532.jpg 1x, /_next/static/images/img_oncohelp_desktop-97ee98a1b7619c4b16358958921a8532.jpg 2x"
              class="_3YPgL _1s_Wk" type="image/jpeg">
            <img src="/_next/static/images/img_oncohelp_desktop-97ee98a1b7619c4b16358958921a8532.jpg"
                 class="_3YPgL _1s_Wk"></picture>
          <picture class="_3vPoA"><img
            src="data:image/jpeg;base64,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"
            class="_3vPoA"></picture>
        </div>
      </div>
      <div class="cases-item-project__item" style="width: 1176px; order: 1;">
        <div class="_32yjM" style="background-color: rgb(60, 84, 238);">
          <div class="lKeJQ">
            <div class="_2Cgmk">
              <picture class="_1RTH_">
                <source
                  srcset="data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAAPwAADwAAQUxQSIEAAAABT6AmkiQ1ekwKLrrsyddHRICtr6+nCGwi23bymEFAdJBrOjqQgQIGA6mlo87P7o/3OYjovyK3bRvm1J20fQVRu0w5GQHmMPzMZ6agOUQPM/MYKGAOPRsRalgOh6nRsBwuU6dhObymWcNy+Ey7huUgJ2/Ip8g3kr+L/F3l/0L8rwgAVlA4IHoAAADQBACdASpAABAAPhkIg0EhBv6rAAQAYS0su9UDzBSqoArQRAAxD/2OaajJ/TTWQAD+/jOjC+P2L9KSW5iyylMa11m4UHWtpf/9d8///sYTU9fTreFA6ZBkw75p9Tn/+clnh80hOtv5+MIP84yqPlPhpwtRpMt4PcAAAA== 1x, data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAAPwAADwAAQUxQSIEAAAABT6AmkiQ1ekwKLrrsyddHRICtr6+nCGwi23bymEFAdJBrOjqQgQIGA6mlo87P7o/3OYjovyK3bRvm1J20fQVRu0w5GQHmMPzMZ6agOUQPM/MYKGAOPRsRalgOh6nRsBwuU6dhObymWcNy+Ey7huUgJ2/Ip8g3kr+L/F3l/0L8rwgAVlA4IHoAAADQBACdASpAABAAPhkIg0EhBv6rAAQAYS0su9UDzBSqoArQRAAxD/2OaajJ/TTWQAD+/jOjC+P2L9KSW5iyylMa11m4UHWtpf/9d8///sYTU9fTreFA6ZBkw75p9Tn/+clnh80hOtv5+MIP84yqPlPhpwtRpMt4PcAAAA== 2x"
                  class="_1RTH_" type="image/webp">
                <source
                  srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC 1x, data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC 2x"
                  class="_1RTH_" type="image/jpeg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC"
                  class="_1RTH_"></picture>
            </div>
            <div class="_2sD4x E2rkU _1legF">
              <picture class="_3YPgL _2sD4x">
                <source
                  srcset="/_next/static/images/3_oncohelp_form_desktop-00b7ce296650a28e651274fa7111f49d.jpg.webp 1x, /_next/static/images/3_oncohelp_form_desktop-00b7ce296650a28e651274fa7111f49d.jpg.webp 2x"
                  class="_3YPgL _2sD4x" type="image/webp">
                <source
                  srcset="/_next/static/images/3_oncohelp_form_desktop-4f0b3b56c55de72a4502475ec72f4235.jpg 1x, /_next/static/images/3_oncohelp_form_desktop-4f0b3b56c55de72a4502475ec72f4235.jpg 2x"
                  class="_3YPgL _2sD4x" type="image/jpeg">
                <img src="/_next/static/images/3_oncohelp_form_desktop-4f0b3b56c55de72a4502475ec72f4235.jpg"
                     class="_3YPgL _2sD4x"></picture>
              <picture class="_3vPoA"><img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCABdAJwDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QALRAAAgIABAQEBgMBAAAAAAAAAAECEQMSIZExUVJhEyJBcQQyM0JiklOBoeH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A+407/wCky4l/UX6mwQYy4n8i/U2uGvEAoAy5NPSDfdUM76JboDQAAAEvsBQL7AAAH7WAD4aEvsUDNT6lsKn1LY0AMtSy1azczQAAAAAABJJuLSMYUZRuzoDN5lurvmABzxMZYc6abVXaNI6A5ePFfbK+VDx43WWb/oDqDk/iIqKdS1V8CL4mDfyz2A7AkZKUVJcGUAAAAAAAAAAAAAAA0AMO/RrYU+a2K5xUqckmM8OqO4EqXNbCnzWxc8epbjPHqW4EqXNbCm/VbFzR6luM0brMr9wJUua2KVOL4NMoGQaIwIAAAAAAAAAANAADliRw5S88ba7BRwtGof4akpX5a/tCp/jsBmsJ0svDVaFWFhvVQXMvn/HYRUr81V2QBYOGqqCSXoieDh6eVacDenIacgJDDhD5YpexogQFIykYEAAAAAAAAAAGgABibp6zy2ZvT6q/w3JpPW9iZ4167AWKfHNaLqZU48Ndh4kVer07Aa1GpnPHTjr2Gdd9gNAypp1x17GwBGUjAgAAAAAAAAAA0AAMyTfBkjGS4s54+Jlmo09e9HNYrla1WtfM+dAdsk815tOR0XDU8+epV5tfyYUr9ZaX9z9jWUekHlWJc3Hza3rmZ3UE1dy1XUyWYNgw8NP1l+zNkAjKRgQAAAAB/9k="
                class="_3vPoA"></picture>
            </div>
          </div>
        </div>
      </div>
      <div class="cases-item-project__item" style="width: 1176px; order: 2;">
        <div class="_32yjM" style="background-color: rgb(60, 84, 238);">
          <div class="lKeJQ">
            <div class="_2Cgmk">
              <picture class="_1RTH_">
                <source
                  srcset="data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAAPwAADwAAQUxQSIEAAAABT6AmkiQ1ekwKLrrsyddHRICtr6+nCGwi23bymEFAdJBrOjqQgQIGA6mlo87P7o/3OYjovyK3bRvm1J20fQVRu0w5GQHmMPzMZ6agOUQPM/MYKGAOPRsRalgOh6nRsBwuU6dhObymWcNy+Ey7huUgJ2/Ip8g3kr+L/F3l/0L8rwgAVlA4IHoAAADQBACdASpAABAAPhkIg0EhBv6rAAQAYS0su9UDzBSqoArQRAAxD/2OaajJ/TTWQAD+/jOjC+P2L9KSW5iyylMa11m4UHWtpf/9d8///sYTU9fTreFA6ZBkw75p9Tn/+clnh80hOtv5+MIP84yqPlPhpwtRpMt4PcAAAA== 1x, data:image/webp;base64,UklGRiIBAABXRUJQVlA4WAoAAAAQAAAAPwAADwAAQUxQSIEAAAABT6AmkiQ1ekwKLrrsyddHRICtr6+nCGwi23bymEFAdJBrOjqQgQIGA6mlo87P7o/3OYjovyK3bRvm1J20fQVRu0w5GQHmMPzMZ6agOUQPM/MYKGAOPRsRalgOh6nRsBwuU6dhObymWcNy+Ey7huUgJ2/Ip8g3kr+L/F3l/0L8rwgAVlA4IHoAAADQBACdASpAABAAPhkIg0EhBv6rAAQAYS0su9UDzBSqoArQRAAxD/2OaajJ/TTWQAD+/jOjC+P2L9KSW5iyylMa11m4UHWtpf/9d8///sYTU9fTreFA6ZBkw75p9Tn/+clnh80hOtv5+MIP84yqPlPhpwtRpMt4PcAAAA== 2x"
                  class="_1RTH_" type="image/webp">
                <source
                  srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC 1x, data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC 2x"
                  class="_1RTH_" type="image/jpeg">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQBAMAAAEjzlSMAAAAHlBMVEUAAACqqqqgoKCfn5+fn5+fn5+enp6enp6enp6enp55uvaOAAAACXRSTlMABiuPlL3V8/0rFoXeAAAApUlEQVQoz3XGIW/CYBhF4VNS1tQhMLgmM+CWGYIDOTc7O7PgppbU4uq6waDn3060Td5mHzc3Jw8FnwV10dZUMyosW9mML8c/PA23G+/4y/C5fhN7VIndqcRmjXsm3b5D7EpfJ230h1j1Sqx6I1Y9E/uiLbG53YJJl412B4C0c1Xdwx3vepyBtOseNyDtY48rkPa6xwlIO3tT/V0A9/z48fXMsP/+A4pgrW4b+g7tAAAAAElFTkSuQmCC"
                  class="_1RTH_"></picture>
            </div>
            <div class="_2sD4x E2rkU _1legF">
              <picture class="_3YPgL _2sD4x">
                <source
                  srcset="/_next/static/images/1_oncohelp_preview_desktop-bb8738b7fa6047b5b230a3f1cd9717cd.jpg.webp 1x, /_next/static/images/1_oncohelp_preview_desktop-bb8738b7fa6047b5b230a3f1cd9717cd.jpg.webp 2x"
                  class="_3YPgL _2sD4x" type="image/webp">
                <source
                  srcset="/_next/static/images/1_oncohelp_preview_desktop-ef598639cc8653bf1c3c4b98ef874432.jpg 1x, /_next/static/images/1_oncohelp_preview_desktop-ef598639cc8653bf1c3c4b98ef874432.jpg 2x"
                  class="_3YPgL _2sD4x" type="image/jpeg">
                <img
                  src="/_next/static/images/1_oncohelp_preview_desktop-ef598639cc8653bf1c3c4b98ef874432.jpg"
                  class="_3YPgL _2sD4x"></picture>
              <picture class="_3vPoA"><img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCABdAJwDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMhAAAQMBBQQJBQEBAQAAAAAAAQACEQMSITFRkRNhgaEEIjJBUnGS0eEFFVNi8DNCI//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAAMBAQEAAAAAAAAAAAAAAQIRMRITUf/aAAwDAQACEQMRAD8A90gz8qbNSf8AQelWsjWLXOBpugYEd6mhVmp+QelWML8VltxMWHzMC5G3unZ1NFRqhZbcd1OoeCs1ADEO0QUhCEAhCEEAPky4RN1ycP8AEPSqRKBCe8g8ECYvN6YMk3IQZUhVp0v/AFqhzpxhPaD8jdE6vYWHWuvPP3WcsrtZG7agm94PBVtWeJc9+Z5pG1meaz6XTpFVhwcFQN2KwYboM+a1bgtTLaWGk97aYBdPBNF60jPbsydorDg5toSqvySvyRJKm2EWx/FVH6ojcipD2xMwqBBwRG5HBAIRfki/JQCEX5IvyQCEIVEVuxeucRkOS6KvZWHWzOG9c8utRMNyHJEN8I5KxMYnmjrTi7QrKqZaGAu4LZuCxZNq+ea2bgtY9Smubp5qCizZh0F3Ws4wulMYLoy4fp22NCo2sXgBxDS7GF1EE4VHjgqrVG0qTnumGiTC4h9SoY2Kx/vNamNvEtdZBOFRw4Igx/o7Rcn3Kh4K2nymPqdEG5lY8PlX55fhuOqDM7R3lCIP5HaLGj9QpVqzabW1A52EgLrWbLj1UNNmZcT5hUCCmhQCEIQIpJlJBD3Uz1S5vkSlsG+BuiTnEOPv8I2jrr8d/wAKXGVdqbSDeyAPIJ2CotujHn8IDnEgTz+FPMN1ZYc4TAgJibN4g+aFZJDYTlJMYKomoxtWm5jphwgrl+2dG/fVdlyVpuYWplZymnJ9t6P++qPtvR/31XZI3IkZhX6Zfqajmo9BoUaoqNtWhhJXTKJG5EjMLNtvVEolEjchQEolNCBEpJlJBke0bzed/uiP2dz91ZpgmZ5BLZN7iNAgnuxdz90ASYtHjPur2bcxoEtk0940CC2tDRchJosiE0AmMEkxggHRZNrCL1gGdHmbtVucDfG9TB8Y0QQNg2IIEb1Oz6MXC5pK3uKaDPYUvAFEUAcRIM4963WRdeesbj4UAKFI9YNmRmtAA0AAQApDXRNvkm0OBvdPBBSEIQIpJlJBnW7FxjjCzFQ3XCPP4WtbsLn7+/8AuK55dai9ochqfZG0PhGvwoMZn+4ou75P95rKtZecGjX4WrcFjTA3yN62bgtY9SmmMEkxgujIIkEXcVlsR+OlotH9gzksrIzf6ygtrXNua1gG5ULU3xG5TshHaf6iqa2yIBJ8zKClneHf945LRYvIDiOt6kFl8f8ALtFQMgHBYyLj1vUVYpAR1n3YS4oNEJAQIv4poEUkykgTmyFOzGQ0VQN+qAAM9VLJV2nZjIaI2YyGiu0i1uU8w3U7PK5UBAhFrcnKskht/9k="
                class="_3vPoA"></picture>
            </div>
          </div>
        </div>
      </div>

      -->



    </div>
  </section>
</template>

<script>
export default {
  name: "CasesBages",
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  methods: {
    mousedownSlide() {
      this.$emit('mousedownSlide', ['x', 'y'])
    },
    mouseupSlide() {
      this.$emit('mouseupSlide', ['x', 'y'])
    },
    getPos(event) {
      const rect = this.$refs.casesitem.getBoundingClientRect()

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if(x <= ( rect.width / 2)  ){
        this.$emit('goPrev')
      } else if(x > ( rect.width / 2)) {
        this.$emit('goNext')
      }

      //console.log(x,y, rect.width );

    }
  }
}
</script>

<style lang="scss">
  /*

 */
  .cases-item {
    overflow: hidden;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    * {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &-project {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      will-change: transform;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      &__item {
        position: relative;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow: hidden;
      }

    }


  }
</style>
