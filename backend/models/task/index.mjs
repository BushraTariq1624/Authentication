import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema(
    {
        title: {
            // type: String,
            type: mongoose.Schema.Types.String,
            required: true,
        },
        assignedTo: {
            // type: String,
            type: mongoose.Schema.Types.String,
            required: true,
        },
        status: {
            // type: String,
            type: mongoose.Schema.Types.String,
            required: true,
        },
        description: {
            // type: String,
            type: mongoose.Schema.Types.String,
            required: true,
        },
    }
);
// userSchema.index({ email:1 },{ unique:true })
const Task = mongoose.model('Task', taskSchema);
export default Task;
