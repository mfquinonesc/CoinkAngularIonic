export class Genere {
    id: number;
    notation: string;

    constructor(id?: number, notation?: string) {
        this.id = id!;
        this.notation = notation!;
    }
}
