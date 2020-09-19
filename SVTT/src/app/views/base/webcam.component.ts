import { Component, ViewChild, ElementRef, Renderer2, OnInit } from "@angular/core";

@Component({
    templateUrl: 'webcam.component.html'
})

export class WebcamComponent implements OnInit{
    @ViewChild('video', {static: true}) videoElement: ElementRef;
    @ViewChild('canvas', {static: true}) canvas: ElementRef;
    videoWidth = 0;
    videoHeight = 0;
    constraints = {
        video: {
            facingMode: "enviroment",
            width: {ideal: 2096},
            height: {ideal: 2160}
        }
    }
    public photos: Array<any>;

    constructor(private renderer: Renderer2){
        this.photos = [];
    }

    ngOnInit(): void {
        this.startCamera();
    }

    startCamera(){
        if(!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)){
            navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
        }
        else{
            alert('Camera not available');
        }
    }

    handleError(error){
        console.log('Error: ', error);
    }

    attachVideo(stream){
        this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream)
        this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
            this.videoHeight = this.videoElement.nativeElement.videoHeight;
            this.videoWidth = this.videoElement.nativeElement.videoWidth;
        })
    }

    capture(){
        this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
        this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
        this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement,0,0);
        this.photos.push(this.canvas.nativeElement.toDataURL("image/png"));
        console.log(this.photos);
    }
}