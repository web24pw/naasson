<template>
  <header class="header">
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 78.79">
      <polygon
        points="0 0.91 0 77.87 8.41 77.87 8.41 10.65 26.58 77.87 36.93 77.87 36.93 0.91 28.63 0.91 28.63 58.12 13.2 0.91 0 0.91"
        fill="#00eac5"/>
      <path d="M59.12.91l-12.31,77H55.4l2.17-14.48H75.44l2.17,14.48h9.73L75,.91Zm-.39,54.52L66.45,9.32l7.71,46.11Z"
            fill="#00eac5"/>
      <path d="M106.74.91l-12.32,77H103l2.17-14.48h17.87l2.17,14.48H135L122.65.91Zm-.39,54.52,7.72-46.11,7.71,46.11Z"
            fill="#00eac5"/>
      <path
        d="M235,78.79c5.72,0,10.13-1.6,13.1-4.74s4.51-7.85,4.51-13.9V18.64c0-6.06-1.52-10.73-4.51-13.9S240.7,0,235,0s-10.13,1.59-13.1,4.74-4.51,7.84-4.51,13.9V60.15c0,6.05,1.52,10.73,4.51,13.9S229.26,78.79,235,78.79ZM227,17.84c0-3.27.74-5.67,2.19-7.12a8.64,8.64,0,0,1,11.5,0c1.45,1.45,2.19,3.85,2.19,7.12V61c0,3.27-.74,5.66-2.19,7.12a8.64,8.64,0,0,1-11.5,0C227.78,66.62,227,64.22,227,61Z"
        fill="#00eac5"/>
      <polygon
        points="263.07 0.91 263.07 77.87 271.49 77.87 271.49 10.65 289.65 77.87 300 77.87 300 0.91 291.7 0.91 291.7 58.12 276.27 0.91 263.07 0.91"
        fill="#00eac5"/>
      <path
        d="M185.87,24.88a8.87,8.87,0,0,1-1.43-10.49,9.22,9.22,0,0,1,16.72,1.18c4.82-2.83,7.19-4.31,8.35-5.1-1.66-3.85-5.39-7.13-10.24-9A19,19,0,0,0,178,7.07a17.92,17.92,0,0,0,.57,23.79c4.83,5.41,9.83,10.87,14.66,16.14q2.67,2.91,5.33,5.83c1.79,2,4,5,2.73,9.23a9.28,9.28,0,0,1-6.76,6.54,9.55,9.55,0,0,1-9.18-3.07c-3.51-3.8-6.51-7.65-9.4-11.37-2.71-3.49-5.51-7.09-8.71-10.6l-3.35-3.67c-4.52-5-9.2-10.1-13.76-15.2a8.64,8.64,0,0,1-.62-11.36,9.16,9.16,0,0,1,11.07-3l4.93,2.18c.45-1.51.89-2.95,1.47-4.4s1.32-2.87,2-4.24l-4.44-2A19.22,19.22,0,0,0,156.78.29a18.76,18.76,0,0,0-15,7.49,18.08,18.08,0,0,0,1,23c6,6.61,11.59,13.29,17,19.75,5.9,7,12,14.27,18.51,21.37a19,19,0,0,0,26.85,1.32,17.86,17.86,0,0,0,6-12.5,18.48,18.48,0,0,0-4.94-13.44C199,39.39,192.36,32.07,185.87,24.88Z"
        fill="#00eac5"/>
      <path
        d="M139.82,67.82a21.11,21.11,0,0,0,6.61,7.25,18.1,18.1,0,0,0,14.4,2.53l-.55-.61c-4.51-4.95-8.79-9.64-13.1-14.34C145.29,63.94,141.78,66.41,139.82,67.82Z"
        fill="#00eac5"/>
    </svg>

    <div class="header-line">
      <nav>
        <ul class="header-nav">
          <li><a targetscroll="cases" class="_1L-_M">процесс</a></li>
          <li><a targetscroll="clients" class="_1L-_M">Команда</a></li>
          <li><a targetscroll="howWeWork" class="_1L-_M">как мы работаем</a></li>
        </ul>
      </nav>
      <button class="_32cxT">en</button>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    -webkit-animation-name: _2Fm5m;
    animation-name: _2Fm5m;
    -webkit-animation-duration: 1.3s;
    animation-duration: 1.3s;
    -webkit-animation-timing-function: cubic-bezier(0.59, 0.01, 0.28, 1);
    animation-timing-function: cubic-bezier(0.59, 0.01, 0.28, 1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 46px 56px 0px 56px;

    @media (max-width: 1440px) {
      padding: 46px 34px 0px 34px
    }

    @media (max-width: 1024px) {
      padding: 30px 16px 0px 16px
    }

    .logo {
      width: 200px;
    }

    &-line {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 75%;

      @media (max-width: 1440px) {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        width: auto
      }
    }

    &-nav {

      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      list-style: none;

      @media (max-width: 768px) {
        display: none
      }

    }

  }
</style>
