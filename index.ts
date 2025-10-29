import { Application, Assets } from "pixi.js"
import { Spine } from '@esotericsoftware/spine-pixi-v7';

(async function () {
    var app = new Application({
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        resizeTo: window,
        backgroundColor: 0x2c3e50,
        hello: true,
    });
    document.body.appendChild(app.view as any);

    Assets.addBundle("spine", {
        "spineboyData": "/assets/win_gradations.json",
        "spineboyAtlas": "/assets/win_gradations.atlas"
    });

    const bundle = await Assets.loadBundle("spine");

    const spineboy = Spine.from({
        skeleton: "spineboyData", atlas: "spineboyAtlas" });


    spineboy.state.setAnimation(0, "win_gradation_loop", true);

    app.stage.addChild(spineboy);
})();

