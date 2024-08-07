import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appLazyLoadBackground]",
})
export class LazyLoadBackgroundDirective implements OnInit {
  @Input() appLazyLoadBackground?: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.style.backgroundImage = `url(${this.appLazyLoadBackground})`;
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
