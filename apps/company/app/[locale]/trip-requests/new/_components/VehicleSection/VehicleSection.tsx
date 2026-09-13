// apps/company/app/[locale]/trip-requests/new/_components/VehicleSection/VehicleSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './VehicleSection.module.css';

interface VehicleItem {
  id: string;
  carType: string;
  carModel: string;
  transmission: string;
  additionalInstructions: string[];
  specialNotes: string;
}

interface VehicleSectionProps {
  locale?: string;
}

const translations: Record<string, any> = {
  de: {
    title: 'Fahrzeug',
    subtitle: 'Fügen Sie alle Fahrzeuge hinzu, die in dieser Anfrage enthalten sind',
    counterSuffix: 'Fahrzeug hinzugefügt',
    of: 'von',
    carType: 'Fahrzeugtyp',
    carModel: 'Fahrzeugmodell',
    transmissionType: 'Getriebeart',
    additionalInstruction: 'Zusätzliche Anweisung',
    instructionHint: 'Sie können mehr als eine Option auswählen',
    specialNotes: 'Besondere Hinweise',
    required: 'erforderlich',
    duplicate: 'Duplizieren 📑',
    remove: 'Entfernen 🗑️',
    addOtherVehicle: 'Weiteres Fahrzeug hinzufügen',
    carTypes: ['Limousine / Coupé', 'SUV / Crossover', 'Van / Pick-up', 'Luxus / Klassik', 'Sportwagen', 'Sonstige'],
    carModels: ['Volkswagen', 'Toyota', 'BMW', 'Mercedes', 'Hyundai', 'Tesla', 'Peugeot', 'Sonstige'],
    transmissions: { manual: 'Manuell', automatic: 'Automatik' },
    instructions: [
      'Fahrzeugwäsche angefordert',
      'Anruf vor Lieferung',
      'Elektrofahrzeug (EV)',
      'Nachtbriefkasten bei Lieferung',
      'Rotes Kennzeichen',
      'Vor Lieferung auftanken',
    ],
    specialNotesOptions: ['Hinweisdokument 1', 'Hinweisdokument 2', 'Sonstige'],
  },
  en: {
    title: 'Vehicle',
    subtitle: 'Add all vehicles included in this request',
    counterSuffix: 'vehicle added',
    of: 'of',
    carType: 'Car Type',
    carModel: 'Car Model',
    transmissionType: 'Transmission Type',
    additionalInstruction: 'Additional Instruction',
    instructionHint: 'you can choose more than one option',
    specialNotes: 'Special Notes',
    required: 'required',
    duplicate: 'Duplicate 📑',
    remove: 'Remove 🗑️',
    addOtherVehicle: 'Add Other Vehicle',
    carTypes: ['Sedan / Coupe', 'SUV / Crossover', 'Van / Pickup', 'Luxury / Classic', 'Sports', 'Other'],
    carModels: ['Volkswagen', 'Toyota', 'BMW', 'Mercedes', 'Hyundai', 'Tesla', 'Peugeot', 'Other'],
    transmissions: { manual: 'Manual', automatic: 'Automatic' },
    instructions: [
      'Vehicle Wash Requested',
      'Call Before Delivery',
      'Electric Vehicle (EV)',
      'Night Box at Delivery',
      'Red Plate',
      'Refuel Before Delivery',
    ],
    specialNotesOptions: ['Note Document 1', 'Note Document 2', 'Other'],
  },
  fr: {
    title: 'Véhicule',
    subtitle: 'Ajoutez tous les véhicules inclus dans cette demande',
    counterSuffix: 'véhicule ajouté',
    of: 'sur',
    carType: 'Type de voiture',
    carModel: 'Modèle de voiture',
    transmissionType: 'Type de transmission',
    additionalInstruction: 'Instructions supplémentaires',
    instructionHint: 'vous pouvez choisir plusieurs options',
    specialNotes: 'Notes spéciales',
    required: 'requis',
    duplicate: 'Dupliquer 📑',
    remove: 'Supprimer 🗑️',
    addOtherVehicle: 'Ajouter un autre véhicule',
    carTypes: ['Berline / Coupé', 'SUV / Crossover', 'Camionnette / Pick-up', 'Luxe / Classique', 'Sportive', 'Autre'],
    carModels: ['Volkswagen', 'Toyota', 'BMW', 'Mercedes', 'Hyundai', 'Tesla', 'Peugeot', 'Autre'],
    transmissions: { manual: 'Manuelle', automatic: 'Automatique' },
    instructions: [
      'Lavage du véhicule demandé',
      'Appeler avant la livraison',
      'Véhicule électrique (VE)',
      'Boîte de nuit à la livraison',
      'Plaque rouge',
      'Faire le plein avant la livraison',
    ],
    specialNotesOptions: ['Document de note 1', 'Document de note 2', 'Autre'],
  },
};

export const VehicleSection: React.FC<VehicleSectionProps> = ({ locale = 'en' }) => {
  const t = translations[locale] || translations.en;

  const [vehicles, setVehicles] = useState<VehicleItem[]>([
    {
      id: '1',
      carType: t.carTypes[3],
      carModel: t.carModels[3],
      transmission: t.transmissions.automatic,
      additionalInstructions: [t.instructions[0], t.instructions[5]],
      specialNotes: t.specialNotesOptions[0],
    },
  ]);

  const handleUpdateVehicle = (index: number, updated: Partial<VehicleItem>) => {
    const updatedList = [...vehicles];
    updatedList[index] = { ...updatedList[index], ...updated };
    setVehicles(updatedList);
  };

  const toggleInstruction = (index: number, option: string) => {
    const current = vehicles[index].additionalInstructions;
    const updatedInstructions = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    handleUpdateVehicle(index, { additionalInstructions: updatedInstructions });
  };

  const handleAddVehicle = () => {
    if (vehicles.length >= 8) return;
    setVehicles((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        carType: '',
        carModel: '',
        transmission: t.transmissions.automatic,
        additionalInstructions: [],
        specialNotes: '',
      },
    ]);
  };

  const handleDuplicate = (index: number) => {
    if (vehicles.length >= 8) return;
    const itemToDuplicate = { ...vehicles[index], id: Date.now().toString() };
    const updated = [...vehicles];
    updated.splice(index + 1, 0, itemToDuplicate);
    setVehicles(updated);
  };

  const handleRemove = (index: number) => {
    if (vehicles.length <= 1) return;
    setVehicles(vehicles.filter((_, i) => i !== index));
  };

  return (
    <section className={styles['xcar-vehicle-section']}>
      <div className={styles['xcar-vehicle-section__header']}>
        <div>
          <h2 className={styles['xcar-vehicle-section__title']}>{t.title}</h2>
          <p className={styles['xcar-vehicle-section__subtitle']}>{t.subtitle}</p>
        </div>
        <span className={styles['xcar-vehicle-section__counter']}>
          <strong>{vehicles.length} {t.of} 8</strong> {t.counterSuffix}
        </span>
      </div>

      {vehicles.map((vehicle, index) => (
        <div key={vehicle.id} className={styles['xcar-vehicle-card']}>
          <div className={styles['xcar-vehicle-card__top']}>
            <span className={styles['xcar-vehicle-card__badge']}>#{index + 1}</span>
            <button type="button" className={styles['xcar-vehicle-card__collapse-btn']}>
              <span>︿</span>
            </button>
          </div>

          <div className={styles['xcar-vehicle-card__field']}>
            <div className={styles['xcar-vehicle-card__label-row']}>
              <label className={styles['xcar-vehicle-card__label']}>{t.carType}</label>
              <span className={styles['xcar-vehicle-card__required']}>{t.required}</span>
            </div>
            <div className={styles['xcar-vehicle-card__grid-3']}>
              {t.carTypes.map((type: string) => (
                <button
                  key={type}
                  type="button"
                  className={`${styles['xcar-vehicle-card__option-btn']} ${
                    vehicle.carType === type ? styles['xcar-vehicle-card__option-btn--active'] : ''
                  }`}
                  onClick={() => handleUpdateVehicle(index, { carType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['xcar-vehicle-card__field']}>
            <div className={styles['xcar-vehicle-card__label-row']}>
              <label className={styles['xcar-vehicle-card__label']}>{t.carModel}</label>
              <span className={styles['xcar-vehicle-card__required']}>{t.required}</span>
            </div>
            <div className={styles['xcar-vehicle-card__grid-4']}>
              {t.carModels.map((model: string) => (
                <button
                  key={model}
                  type="button"
                  className={`${styles['xcar-vehicle-card__option-btn']} ${
                    vehicle.carModel === model ? styles['xcar-vehicle-card__option-btn--active'] : ''
                  }`}
                  onClick={() => handleUpdateVehicle(index, { carModel: model })}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['xcar-vehicle-card__field']}>
            <div className={styles['xcar-vehicle-card__label-row']}>
              <label className={styles['xcar-vehicle-card__label']}>{t.transmissionType}</label>
              <span className={styles['xcar-vehicle-card__required']}>{t.required}</span>
            </div>
            <div className={styles['xcar-vehicle-card__grid-2']}>
              {[t.transmissions.manual, t.transmissions.automatic].map((trans) => (
                <button
                  key={trans}
                  type="button"
                  className={`${styles['xcar-vehicle-card__option-btn']} ${
                    vehicle.transmission === trans ? styles['xcar-vehicle-card__option-btn--active'] : ''
                  }`}
                  onClick={() => handleUpdateVehicle(index, { transmission: trans })}
                >
                  {trans}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['xcar-vehicle-card__field']}>
            <div className={styles['xcar-vehicle-card__label-row']}>
              <label className={styles['xcar-vehicle-card__label']}>{t.additionalInstruction}</label>
              <span className={styles['xcar-vehicle-card__hint']}>{t.instructionHint}</span>
            </div>
            <div className={styles['xcar-vehicle-card__grid-3']}>
              {t.instructions.map((inst: string) => (
                <button
                  key={inst}
                  type="button"
                  className={`${styles['xcar-vehicle-card__option-btn']} ${
                    vehicle.additionalInstructions.includes(inst)
                      ? styles['xcar-vehicle-card__option-btn--active']
                      : ''
                  }`}
                  onClick={() => toggleInstruction(index, inst)}
                >
                  {inst}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['xcar-vehicle-card__field']}>
            <label className={styles['xcar-vehicle-card__label']}>{t.specialNotes}</label>
            <div className={styles['xcar-vehicle-card__grid-3']}>
              {t.specialNotesOptions.map((note: string) => (
                <button
                  key={note}
                  type="button"
                  className={`${styles['xcar-vehicle-card__option-btn']} ${
                    vehicle.specialNotes === note ? styles['xcar-vehicle-card__option-btn--active'] : ''
                  }`}
                  onClick={() => handleUpdateVehicle(index, { specialNotes: note })}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['xcar-vehicle-card__actions']}>
            <button
              type="button"
              className={styles['xcar-vehicle-card__duplicate-btn']}
              onClick={() => handleDuplicate(index)}
            >
              {t.duplicate}
            </button>
            <button
              type="button"
              className={styles['xcar-vehicle-card__remove-btn']}
              onClick={() => handleRemove(index)}
            >
              {t.remove}
            </button>
          </div>
        </div>
      ))}

      {vehicles.length < 8 && (
        <button
          type="button"
          className={styles['xcar-vehicle-add-btn']}
          onClick={handleAddVehicle}
        >
          {t.addOtherVehicle} <span className={styles['xcar-vehicle-add-btn__icon']}>+</span>
        </button>
      )}
    </section>
  );
};

export default VehicleSection;