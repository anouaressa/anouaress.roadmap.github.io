const allRonds = document.querySelectorAll('.icon');
const allBoxes = document.querySelectorAll('.content');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(content => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === content.getAttribute('data-anim')){

            let tween = gsap.from(content, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            .addTo(controller)

        }

    }

})
