---
sidebarDepth: 2
---



# Rule configuration item

::: warning prompt

**The configuration item name of the JSON rule is the same as the configuration method name of the component generator, and the configuration parameters are the same**

:::

## **Built-in component configuration item**

### **props**

- **parameter**:  `Object`
- **description**: Component rule configuration

### **event**

- **parameter**:  `Object`
- **description**: Component event configuration

### **validate**

- **parameter**:  `Array`
- **description**: Component validation rule configuration

### **options**

- **parameter**:  `Array`
- **description**: Part of the component `option` option configuration

### **emit**

- **parameter**:  `Array`
- **description**: Event name triggered by `emit` mode in component mode

### **col**

- **parameter**:  `Object`
- **description**: Component layout configuration
- **reference**: [Col_props](/en/guide/col.html)

### **emitPrefix**  <Badge text="1.5.2+"/>

- **parameter**:  `Object`
- **description**:Customize the prefix of the component `emit ` event
- **default**:  `field` 

### **className**  <Badge text="1.5.3+"/>

- **parameter**:  `Object | Array | string`
- **description**: Custom component `class`


## Custom component configuration item

Custom components additionally support the following configuration items



1. **children\(Array\)** Subcomponent element generation rules
2. **scopedSlots\(Object\)**
3. **nativeOn\(Object\)**
4. **on\(Object\)**
5. **domProps\(Object\)**
6. **props\(Object\)**
7. **attrs\(Object\)**
8. **style\(Object\)**
9. **class\(Object\)**
10. **directives\(Array\)**



**[Custom configuration item description](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1l)**