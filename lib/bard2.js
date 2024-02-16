'use strict';

import axios from 'axios';

class Bard {
  constructor() {}

  async question({ ask: questionText }) {
    if (!questionText) {
      throw new Error("Please specify a question!");
    }

    try {
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage", {
        'ask': questionText
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });

      return response.data;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }

  async questionWithImage({ ask: questionText, image: imageUrl }) {
    if (!questionText) {
      throw new Error("Please specify a question!");
    }

    if (!imageUrl) {
      throw new Error("Please specify a URL for the image!");
    }

    try {
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage/image", {
        'ask': questionText,
        'image': imageUrl
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });

      return response.data;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }
}

export default Bard;
