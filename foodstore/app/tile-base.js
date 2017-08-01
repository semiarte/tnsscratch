"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animation_1 = require("tns-core-modules/ui/animation");
function convertDirectionToAnimation(direction) {
    var def = {
        duration: 500,
        translate: { x: 0, y: 0 },
        curve: new animation_1.CubicBezierAnimationCurve(0, .5, .5, 1)
    };
    switch (direction) {
        case 'down':
            def.translate = { x: 0, y: 150 };
            break;
        case 'up':
            def.translate = { x: 0, y: -150 };
            break;
        case 'left':
            def.translate = { x: -150, y: 0 };
            break;
        case 'right':
            def.translate = { x: 150, y: 0 };
            break;
        default:
            break;
    }
    return def;
}
exports.convertDirectionToAnimation = convertDirectionToAnimation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGlsZS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsMkRBQStGO0FBRS9GLHFDQUE0QyxTQUFpQjtJQUN6RCxJQUFJLEdBQUcsR0FBd0I7UUFDM0IsUUFBUSxFQUFFLEdBQUc7UUFDYixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDekIsS0FBSyxFQUFFLElBQUkscUNBQXlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3JELENBQUM7SUFDRixNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssTUFBTTtZQUNQLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUM7UUFDVixLQUFLLElBQUk7WUFDTCxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUM7UUFDVixLQUFLLE1BQU07WUFDUCxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUM7UUFDVixLQUFLLE9BQU87WUFDUixHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakMsS0FBSyxDQUFDO1FBQ1Y7WUFDSSxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNmLENBQUM7QUF2QkQsa0VBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBBbmltYXRpb25EZWZpbml0aW9uLCBDdWJpY0JlemllckFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGlyZWN0aW9uVG9BbmltYXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBBbmltYXRpb25EZWZpbml0aW9uIHtcbiAgICBsZXQgZGVmOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBjdXJ2ZTogbmV3IEN1YmljQmV6aWVyQW5pbWF0aW9uQ3VydmUoMCwgLjUsIC41LCAxKVxuICAgIH07XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICBkZWYudHJhbnNsYXRlID0geyB4OiAwLCB5OiAxNTAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICBkZWYudHJhbnNsYXRlID0geyB4OiAwLCB5OiAtMTUwIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICBkZWYudHJhbnNsYXRlID0geyB4OiAtMTUwLCB5OiAwIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgZGVmLnRyYW5zbGF0ZSA9IHsgeDogMTUwLCB5OiAwIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuIl19