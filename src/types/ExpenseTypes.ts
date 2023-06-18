export interface ExpenseProps {
  expenseList: Expense[];
  periodName: string;
}

export class Expense {
  private id: string;
  private description: string;
  private amount: number;
  private date: Date;

  constructor(id: string, description: string, amount: number, date: Date) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.date = date;
  }

  public getId(): string {
    return this.id;
  }

  public getDescription(): string {
    return this.description;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getDate(): Date {
    return this.date;
  }
}
