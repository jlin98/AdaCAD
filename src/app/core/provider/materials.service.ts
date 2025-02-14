import { Injectable } from '@angular/core';
import { Material } from '../model/datatypes';
import { createMaterial, setMaterialID } from '../model/material';


export interface MaterialMap{
  old_id: number,
  new_id: number
 }


@Injectable({
  providedIn: 'root'
})
export class MaterialsService {



  /** array ndx should be the same as shuttle id */
  materials: Array<Material> = [];


  constructor() { 

    //this.materials = [new Shuttle({id: 0, name: 'autogenerated', insert: true, visible: true, color: "#333333", thickness: 100, type: 0, notes: ""})];

    this.materials = [
     createMaterial({id: 0, name: 'shuttle 0', insert: true, visible: true, color: "#333333", thickness: 100, diameter: 5, type: 0, notes: ""}), 
     createMaterial({id: 1, name: 'shuttle 1', insert: true, visible: true, color: "#ffffff", thickness: 100, diameter: 5, type: 0, notes: ""}), 
     createMaterial({id: 2, name: 'conductive', insert: true, visible: true, color: "#ff4081", thickness: 100, diameter: 5,type: 1, notes: ""})];
  }

  reset() {
    this.materials = [
      createMaterial({id: 0, name: 'shuttle 0', insert: true, visible: true, color: "#333333", thickness: 100,diameter: 5, type: 0, notes: ""}), 
      createMaterial({id: 1, name: 'shuttle 1', insert: true, visible: true, color: "#ffffff", thickness: 100, diameter: 5,type: 0, notes: ""}), 
      createMaterial({id: 2, name: 'conductive', insert: true, visible: true, color: "#ff4081", thickness: 100,diameter: 5, type: 1, notes: ""})];
  }



  /**
   * overload shuttles with uploaded data. 
   * check to ensure that ids match array index and return a draft mapping
   * @param shuttles 
   */
  overloadShuttles(shuttles: Array<Material>): Array<MaterialMap>{

    const map: Array<MaterialMap> = [];
    if(shuttles === undefined) return map;

    this.materials = [];
    return this.addShuttles(shuttles);
  }

  /**
   * adds a set of shuttles from a file import
   * @param shuttles 
   * @returns the offset of the new ids to the old ones
   */
  addShuttles(shuttles: Array<Material>) : Array<MaterialMap>{

    const map: Array<MaterialMap> = [];

    const offset: number = this.materials.length;

    shuttles.forEach(s => {
      const shuttle = createMaterial(s);
      map.push({old_id: shuttle.id, new_id: this.materials.length});
      setMaterialID(shuttle, this.materials.length);
      this.materials.push(createMaterial(shuttle));
    });

    return map;
  }

  /**
   * returns the color of the shuttle at this index
   * @param index  the id of the shuttly to get
   * @returns the color or white if null
   */
  getColor(index: number) {

    const s: Material = this.getShuttle(index);
    if(s === null) return "#ffffff";
    return s.color;
  }


    getDiameter(index: number) {

      const s: Material = this.getShuttle(index);
      if(s === null) return 1;
      return s.diameter;
    }
  

/**
 * adds a new material to the end of the list and updates the id.
 * @param s 
 */
  addShuttle(s: Material){
    s.id = this.materials.length;
    this.materials.push(s);
  }


  /**
   * deletes a shuttle and readjustes the id
   * @param id 
   */
  deleteShuttle(id: number) : Array<MaterialMap>{

    const new_list: Array<Material> = this.materials.filter(el => el.id != id);
    return this.overloadShuttles(new_list);

  }

  getShuttle(id: number) : Material{
    const ndx: number = this.materials.findIndex(el => el.id === id);
    if(ndx != -1) return this.materials[ndx];
    return null;
  }


  getNextShuttle(id: number) : Material{
    let ndx: number = 0;
    if(id === undefined || id === null) ndx = this.getFirstShuttle().id;
    else ndx = this.materials.findIndex(el => el.id === id)

    if(ndx === -1){
      console.error("material with id", id, "not found");
      return this.getFirstShuttle();
    }else{
      return this.materials[(ndx+1)%this.materials.length];
    }

  }

  getShuttles() : Array<Material>{
    return this.materials;
  }

  exportForSaving() : Array<Material> {
    return this.materials;
  }

  getFirstShuttle()  : Material {
    if(this.materials.length === 0){
      console.error("no materials loaded");
      return null;
    } 
    return this.materials[0];
  }

  /**
   * given a list of material mappings, returns a list where they are all teh same size, 
   * @param systems the system mappings to compare
   */
  standardizeLists(shuttles: Array<Array<number>>) : Array<Array<number>> {
   
    if(shuttles.length === 0) return [];

    const standard = shuttles.map(el => el.slice());

     //standardize teh lengths of all the returned arrays 
     const max_length:number = standard.reduce((acc, el) => {
      const len = el.length;
      if(len > acc) return len;
      else return acc;
    }, 0);


    standard.forEach((sys, ndx) => {
      if(sys.length < max_length){
        for(let i = sys.length; i < max_length; i++){
          sys.push(sys[0]);
        }
      }
    });

    return standard;
  }

}
