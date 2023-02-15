function main(param) {
    var scene = new g.Scene({
        game: g.game,
        // このシーンで利用するアセットのIDを列挙し、シーンに通知します
        assetIds:["30497"],
    });
    /*
    let fill=null;

    fill=new g.FilledRect({
        scene:scene,
        cssColor:"red",
        width:50,
        height:50,
        touchable:true
    });

    function Rect(){
        function Click(){
            fill.onPointDown.add(()=>{
                --fill.width;
                fill.modified();
            });
        }

        Click();
    }
    
    scene.append(fill);
    
    function Rect2(){
        const fill=new g.FilledRect({
            scene:scene,
            cssColor:"blur",
            width:100,
            height:100,
            x:100
        })
        
        scene.append(fill);
    }
    */

    function Sprite(){
        const sprite=new g.Sprite({
            scene:scene,
            src:scene.asset.getImageById("30497"),
        });

        scene.append(sprite);
    }

    scene.onLoad.add(Sprite);
    //scene.onLoad.add(Rect);
    //scene.onLoad.add(Rect2);
    g.game.pushScene(scene);
}

const a=class A{}
const b=new a();


module.exports = main;