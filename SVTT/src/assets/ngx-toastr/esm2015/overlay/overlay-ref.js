/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export class OverlayRef {
    constructor(_portalHost) {
        this._portalHost = _portalHost;
    }
    attach(portal, newestOnTop = true) {
        return this._portalHost.attach(portal, newestOnTop);
    }
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    detach() {
        return this._portalHost.detach();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3RyLyIsInNvdXJjZXMiOlsib3ZlcmxheS9vdmVybGF5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUFvQixXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7SUFBRyxDQUFDO0lBRW5ELE1BQU0sQ0FDSixNQUE0QixFQUM1QixjQUF1QixJQUFJO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvdmVybGF5IHRoYXQgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBPdmVybGF5IHNlcnZpY2UuXG4gKiBVc2VkIHRvIG1hbmlwdWxhdGUgb3IgZGlzcG9zZSBvZiBzYWlkIG92ZXJsYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5UmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9ydGFsSG9zdDogQmFzZVBvcnRhbEhvc3QpIHt9XG5cbiAgYXR0YWNoKFxuICAgIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4sXG4gICAgbmV3ZXN0T25Ub3A6IGJvb2xlYW4gPSB0cnVlLFxuICApOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbEhvc3QuYXR0YWNoKHBvcnRhbCwgbmV3ZXN0T25Ub3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIGFuIG92ZXJsYXkgZnJvbSBhIHBvcnRhbC5cbiAgICogQHJldHVybnMgUmVzb2x2ZXMgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBkZXRhY2hlZC5cbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5kZXRhY2goKTtcbiAgfVxufVxuIl19