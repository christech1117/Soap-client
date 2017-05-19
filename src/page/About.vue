<template lang="pug">
  #about
    .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/ce99d9306219b43ff4a11a2c68cd6bc5.jpg')")
    .container
      .section-header
        h1
          i.fa.fa-flag(aria-hidden='true')
          | 品牌介紹
      ol.breadcrumb
        li
          router-link(:to="{ path: '/' }")
            i.fa.fa-home(aria-hidden='true')
        li.active 關於我們
      p
        | 為什麼要將推廣無毒農業作為協會的宗旨? 有化學肥料與農藥以來，農友們對於化學製品的依賴已超出土地還有生物環境所能承受的範圍，過量的化肥使得土壤酸化，續種困難，肥料與農藥只能下得更多更重。農藥的使用則是影響人體與造成生態更嚴重的問題。過去要吃蔬果時總是會被叮嚀有農藥所以要多洗幾次才能洗乾淨，多洗幾次真的就行嗎?農藥有噴灑作物表面也有埋在土中加在灌溉水裡的，去掉蟲害殺滅病菌，但是作物都會把它吸收循環結出果實，這樣光是洗表面有用嗎?! 自然環境中的生物也大受影響，昆蟲與小動物吃有農藥的植物，肉食性的生物再把含有農藥的生物吃進肚裡，那人類呢?人類甚麼都吃的結果就是各種的癌症越來越多!
      img(src='http://demo.mor-e.com.tw/demo/yatia/images/images/188e71ab04b334ff72370d29323c44ff.jpg', alt='')
      p
        | 當前的制度與法規雖然有一些把關與管理的辦法，但是食安問題依舊層出不窮，因為防君子防不了小人，牽涉理念要凌駕於利益，除了訂出辦法最終還是要依靠良心，協會的宗旨首要是在食安上做把關，推廣無毒的優良產品，其次將這樣的觀念與理念傳達出去，畢竟用心栽種非慣行農法的無毒作物要花更大的心力與成本，這部份透過協會的運作也要讓消費者能夠理解。
      img(src='http://demo.mor-e.com.tw/demo/yatia/images/images/42be164d17da0535834e01b0a0811634.jpg', alt='')
      p
        | 生產者用心對待環境與生產作物，消費者給予價格上的認同才會有持續下去的動力，如果您認同我們的理念也願意幫助推廣請註冊與關注我們的網站，多多給予小農支持，或是有農友想加入我們的行列也可與我們聯絡~期待您的行動參與~
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

#about
  font-weight: 400
  animation: fadeIn 1s ease both

  p
    margin: 50px 15%
    text-align: left
    font-size: 20px

</style>

