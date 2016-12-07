export class Todo {
    text: String;
    dueDate: Date;
    createdDate: Date;
    status: String;
    messageId?: String;
    userId?; String;

    constructor(
        text: String,
        dueDate: Date,
        createdDate: Date,
        status: String,
        messageId?: String,
        userId?: String
    ) {

        this.text = text;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
        this.status = status;
        this.messageId = messageId;
        this.userId = userId;
    }
}