declare global {
    namespace AppleRuntime {
        interface ExpoHaptics {
            notificationAsync(type: NotificationFeedbackType): Promise<void>;
            impactAsync(style: ImpactFeedbackStyle): Promise<void>;
            selectionAsync(): Promise<void>;
        }
    }
    namespace AndroidRuntime {
        interface ExpoHaptics {
            notificationAsync(type: string): Promise<void>;
            impactAsync(style: string): Promise<void>;
            selectionAsync(): Promise<void>;
        }
    }
    interface ExpoNativeModules {
        ExpoHaptics?: AppleRuntime.ExpoHaptics | AndroidRuntime.ExpoHaptics;
    }
}
/**
 * The type of notification feedback generated by a UINotificationFeedbackGenerator object.
 * [`UINotificationFeedbackType`](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype)
 */
export declare enum NotificationFeedbackType {
    /**
     * A notification feedback type indicating that a task has completed successfully.
     */
    Success = "success",
    /**
     * A notification feedback type indicating that a task has produced a warning.
     */
    Warning = "warning",
    /**
     * A notification feedback type indicating that a task has failed.
     */
    Error = "error"
}
/**
 * The mass of the objects in the collision simulated by a UIImpactFeedbackGenerator object
 * [`UINotificationFeedbackStyle`](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle)
 */
export declare enum ImpactFeedbackStyle {
    /**
     * A collision between small, light user interface elements.
     */
    Light = "light",
    /**
     * A collision between moderately sized user interface elements.
     */
    Medium = "medium",
    /**
     * A collision between large, heavy user interface elements.
     */
    Heavy = "heavy"
}
/**
 * The kind of notification response used in the feedback.
 * @param type A notification feedback type that on iOS is directly mapped to [UINotificationFeedbackType](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype),
 * while on Android these are simulated using [Vibrator](https://developer.android.com/reference/android/os/Vibrator).
 * You can use one of `Haptics.NotificationFeedbackType.{Success, Warning, Error}`.
 * @return A `Promise` which fulfils once native size haptics functionality is triggered.
 */
export declare function notificationAsync(type?: NotificationFeedbackType): Promise<void>;
/**
 * @param style A collision indicator that on iOS is directly mapped to [`UIImpactFeedbackStyle`](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle),
 * while on Android these are simulated using [Vibrator](https://developer.android.com/reference/android/os/Vibrator).
 * You can use one of `Haptics.ImpactFeedbackStyle.{Light, Medium, Heavy}`.
 * @return A `Promise` which fulfils once native size haptics functionality is triggered.
 */
export declare function impactAsync(style?: ImpactFeedbackStyle): Promise<void>;
/**
 * Used to let a user know when a selection change has been registered.
 * @return A `Promise` which fulfils once native size haptics functionality is triggered.
 */
export declare function selectionAsync(): Promise<void>;
//# sourceMappingURL=Haptics.d.ts.map