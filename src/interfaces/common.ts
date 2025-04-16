/**
 * Logo interface
 */
export interface Logo {
    img: string;
    name: string;
}

/**
 * Menu interface
 */
export interface Menu {
    href: string;
    name: string;
    style?: string;
    click?: (name: string) => void;
}

/**
 * 
 */
export interface Major {
    icon: string;
    title: string; 
    subjects: string;
}

/**
 * job interface
 */
export interface Job {
    img: string;
    alt: string;
    name: string;
    period: string;
}

/**
 * coding interface
 */
export interface Coding {
    title: string;
    percent: number;
}

/**
 * project interface
 */
export interface Project {
    img: string;
    alt: string;
    title: string;
    description: string;
}

/**
 * categotu interface
 */
export interface Category {
    name: string;
    count: number;
}

/**
 * testimonial interface
 */
export interface Testimonial {
    img: string;
    alt: string;
    description: string;
    name: string;
    company: string;
}