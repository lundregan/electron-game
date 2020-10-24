export interface Animation {
    targets: string;
    duration: number;
    easing: string;

    // Properties to manipulate
    scale?: number;
    rotate?: number
    background?: string;
}