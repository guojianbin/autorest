/*
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UsageListResult class.
 * @constructor
 * The List Usages operation response.
 *
 */
class UsageListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UsageListResult
   *
   * @returns {object} metadata of UsageListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageListResult',
      type: {
        name: 'Composite',
        className: 'UsageListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UsageElementType',
                  type: {
                    name: 'Composite',
                    className: 'Usage'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UsageListResult;
