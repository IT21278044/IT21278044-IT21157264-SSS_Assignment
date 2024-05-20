const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  sender: {
    type: Object,
    required: true
  },
  socketId: {
    type: String,
    required: true
  },
  timeSent: {
    type: String,
    required: true
  },
  dateSent: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  }
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;
