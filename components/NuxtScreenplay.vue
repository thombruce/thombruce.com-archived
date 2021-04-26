<template lang='pug'>
article.screenplay
  header.title-page(v-html="screenplay.html.title_page")
  .script(v-html="screenplay.html.script")
</template>

<script>
export default {
  props: ['screenplay']
}
</script>

<style lang='scss'>
.screenplay {
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
  font-size: 12pt;
  line-height: 1;
  max-width: 6in;
  margin: 1em auto;
  -webkit-text-size-adjust: none;

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    font-size: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  .underline {
    text-decoration: underline;
  }
  
  .title-page {
    text-align: center;
    margin: 5em auto;

    h1 {
      text-transform: uppercase;
      text-decoration: underline;
      margin-bottom: 2.5em;
    }
    
    .credit {
      margin-bottom: 1.5em;
    }
    
    .authors {
      margin-bottom: 4em;
    }
    
    .draft-date {
      text-align: right;
      margin-bottom: 0.5em;
    }
    
    .revision {
      text-align: right;
      margin-bottom: 0;
    }
  }
  
  .section-heading {
    text-align: center;

    &:hover {
      background-color: lightyellow;
    }
  }
  
  .scene {
    margin-top: 2em;
  }
  
  .scene-heading {
    margin-bottom: 0;

    &:hover {
      background-color: lightyellow;
    }
  }
  
  .action {
    margin: 1em 0;
  }
  
  .dialogue {
    width: 75%;
    max-width: 4in;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 17%;

    h4 {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 25%;
    }
    
    .lines {
      max-width: 3.5in;
      margin-top: 0;
      margin-bottom: 0;
    }
    
    .parenthetical {
      max-width: 2in;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 15%;
      text-indent: -0.6em;
      page-break-inside: avoid;
      page-break-after: avoid;
    }
  }
  
  .dual-dialogue {
    width: 100%;
    margin: 1em 0;

    .dialogue {
      max-width: 50%;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      float: left;
      clear: none;

      .lines {
        width: 95%;
      }
    }
  }
  
  .trans {
    max-width: 2in;
    margin-left: 63%;
    clear: both;
    page-break-before: avoid;
  }
  
  .note {
    display: block;
    font-size: 11pt;
    font-family: "Comic Sans MS", "Marker Felt", "sans-serif";
    line-height: 1.5;
    background-color: lightgoldenrodyellow;
    padding: 1em;
  }
  
  .synopsis {
    margin-top: 0;
    color: grey;
    font-style: italic;
  }
  
  .center {
    text-align: center;
    white-space: pre-wrap;
  }  
}
</style>
