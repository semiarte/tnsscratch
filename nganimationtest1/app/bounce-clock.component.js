"use strict";
var core_1 = require("@angular/core");
var keyframe_animation_1 = require('ui/animation/keyframe-animation');
var page_1 = require("ui/page");
var BounceClockComponent = (function () {
    function BounceClockComponent(page) {
        this.page = page;
    }
    BounceClockComponent.prototype.ngOnInit = function () {
        //this.page
    };
    BounceClockComponent.prototype.onTapJs = function () {
        var kfAniInfo = this.page.getKeyframeAnimationWithName('lblanimation');
        kfAniInfo.duration = 500;
        console.dir(kfAniInfo);
        var myTWrapper = this.myTextWrapper.nativeElement;
        var childCount = myTWrapper.getChildrenCount();
        for (var i = 0; i < childCount; i++) {
            var lbl = myTWrapper.getChildAt(i);
            console.log('detay: ' + kfAniInfo.delay);
            kfAniInfo.delay = kfAniInfo.delay + 50;
            var kfAni = keyframe_animation_1.KeyframeAnimation.keyframeAnimationFromInfo(kfAniInfo, 2);
            console.log('ani delay: ' + kfAni.delay);
            kfAni.play(lbl)
                .then(function () {
                console.log('done');
            });
        }
    };
    BounceClockComponent.prototype.onTapClass = function () {
        var myTWrapper = this.myTextWrapper.nativeElement;
        var childCount = myTWrapper.getChildrenCount();
        for (var i = 0; i < childCount; i++) {
            var lbl = myTWrapper.getChildAt(i);
            //lbl.className = "lbl-tap lbl-tap-" + (i + 1);
            this.toggleClassOnView(lbl, "lbl-tap-" + (i + 1), 'sdf');
            console.log(lbl.text);
        }
        //var mySpan1 = <Span>this.span1.nativeElement;
        //console.dir(mySpan1.text);
        /*
        var myfs1 = <FormattedString>this.fs1.nativeElement;

        console.dir('spannum:' + myfs1.spans.length);


        for (var i = 0; i < myfs1.spans.length; i++) {
            var sp = <Span>myfs1.spans.getItem(i);
            console.dir(sp.text);
        }
        */
    };
    BounceClockComponent.prototype.toggleClassOnView = function (view, className1, className2) {
        console.log('start toggleClassName:' + view.className);
        if (!view.className)
            view.className = '';
        var newClassName = view.className.trim();
        if (view.className.indexOf(className1) >= 0) {
            newClassName = view.className.replace(className1, '');
            newClassName = newClassName.trim() + ' ' + className2;
        }
        else {
            newClassName = view.className.replace(className2, '');
            newClassName = newClassName.trim() + ' ' + className1;
        }
        view.className = newClassName;
        console.log('end toggleClassName:' + view.className);
    };
    __decorate([
        core_1.ViewChild("myTextWrapper"), 
        __metadata('design:type', core_1.ElementRef)
    ], BounceClockComponent.prototype, "myTextWrapper", void 0);
    __decorate([
        core_1.ViewChild("span1"), 
        __metadata('design:type', core_1.ElementRef)
    ], BounceClockComponent.prototype, "span1", void 0);
    __decorate([
        core_1.ViewChild("fs1"), 
        __metadata('design:type', core_1.ElementRef)
    ], BounceClockComponent.prototype, "fs1", void 0);
    BounceClockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "bounce-clock",
            templateUrl: "bounce-clock.component.html",
            styleUrls: ["bounce-clock.component.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], BounceClockComponent);
    return BounceClockComponent;
}());
exports.BounceClockComponent = BounceClockComponent;
//# sourceMappingURL=bounce-clock.component.js.map