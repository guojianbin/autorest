/*
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Tag class.
 * @constructor
 * @member {number} [id]
 *
 * @member {string} [name]
 *
 */
class Tag {
  constructor() {
  }

  /**
   * Defines the metadata of Tag
   *
   * @returns {object} metadata of Tag
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Tag',
      type: {
        name: 'Composite',
        className: 'Tag',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Tag;
