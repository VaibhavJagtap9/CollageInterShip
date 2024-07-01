// components/Address.tsx

import React from 'react';
import styles from '../../styles/Address.module.css';

const Address = () => {
  return (
    <div className={styles.addressContainer}>
      <h2 className={styles.sectionTitle}>Address</h2>
      <form className={styles.addressForm}>
        <div className={styles.formGroup}>
          <label htmlFor="district">District <span>*</span></label>
          <select id="district" className={styles.formControl}>
            <option>--Select--</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="taluka">Taluka <span>*</span></label>
          <select id="taluka" className={styles.formControl}>
            <option>--Select--</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city">City <span>*</span></label>
          <input id="city" type="text" placeholder="Please Enter Organisation City" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="area">Area <span>*</span></label>
          <input id="area" type="text" placeholder="Please Enter Organisation Area" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="state">State <span>*</span></label>
          <input id="state" type="text" placeholder="Please Enter Organisation State" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="pincode">PinCode <span>*</span></label>
          <input id="pincode" type="text" placeholder="Please Enter Organisation Pin Code" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="full-address">Full Address (Flat No, Building Name, Road) <span>*</span></label>
          <input id="full-address" type="text" placeholder="Please Enter Organisation Full Address" className={styles.formControl} />
        </div>
      </form>
    </div>
  );
};

export default Address;
