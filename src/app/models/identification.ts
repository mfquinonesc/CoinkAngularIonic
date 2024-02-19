export class Identification {
    id: number;
    notation: string;
    description: string;

    constructor(id?: number, notation?: string, description?: string) {
        this.id = id!;
        this.notation = notation!;
        this.description = description!;
    }
}
