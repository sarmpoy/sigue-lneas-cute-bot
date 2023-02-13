basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(25, 85)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(85, 25)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(50, 50)
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
        }
    }
})
