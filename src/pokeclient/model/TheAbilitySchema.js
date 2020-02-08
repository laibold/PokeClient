/**
 * Pokecoin
 * The Pokecoin documentation
 *
 * The version of the OpenAPI document: 1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TheAbilitySchema model module.
 * @module model/TheAbilitySchema
 * @version 1.4.0
 */
class TheAbilitySchema {
    /**
     * Constructs a new <code>TheAbilitySchema</code>.
     * @alias module:model/TheAbilitySchema
     */
    constructor() { 
        
        TheAbilitySchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TheAbilitySchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TheAbilitySchema} obj Optional instance to populate.
     * @return {module:model/TheAbilitySchema} The populated <code>TheAbilitySchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TheAbilitySchema();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
TheAbilitySchema.prototype['name'] = undefined;

/**
 * @member {String} text
 */
TheAbilitySchema.prototype['text'] = undefined;

/**
 * @member {String} type
 */
TheAbilitySchema.prototype['type'] = undefined;






export default TheAbilitySchema;
