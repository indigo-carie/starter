  $(function() {
     var cardbox = $('.cardboard'),
        cat = $('#cat'),
        eyes = $('#eyes'),
        heart = $('#heart'),
        mouth = $('#mouth'),
        timeline, repeatTime, fastRepeat;

    timeline = new TimelineMax();
    repeatTime = new TimelineMax({
      delay: 3.5,
      repeat: -1,
      repleatDelay: 3
    });
    fastRepeat = new TimelineMax({
      delay: 3.5,
      repeat: -1
    });

    timeline.set(cardbox, {xPercent: -100, yPercent: 25, scale:0.2})
    .set(heart, {yPercent: 150})
    .set(mouth, {yPercent: -45});

    timeline.to(cardbox, 2, {xPercent: 40, ease:Power2.easeOut}, 0.5)
    .to(cat,1, {yPercent: -75, ease:Power4.easeOut}, 2.5)
    .to(mouth,.05, {yPercent: 0})
    .to(heart,.5, {yPercent: -20}, 3.25);

    repeatTime.to(eyes,.2,{css:{fill:'#B5A89C'}}, 1)
      .to(eyes,.2,{css:{fill:'#000000'}}, 1.2)
    .to(eyes,.2,{css:{fill:'#B5A89C'}}, 1.4)
    .to(eyes,.2,{css:{fill:'#000000'}}, 1.6)
    .to(eyes,.2,{css:{fill:'#B5A89C'}}, 1.8)
    .to(eyes,.2,{css:{fill:'#000000'}}, 2);

    fastRepeat.to(heart,.12, {scaleX:0.95, scaleY:0.95}, 0.85);
  });