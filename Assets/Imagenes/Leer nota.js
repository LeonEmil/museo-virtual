#pragma strict
 
var Pic : GameObject;
var sound : AudioClip;

 
 
function Start () {
    Pic.SetActive(false);

}
 
function Update () {
if(Input.GetKeyDown(KeyCode.Mouse1)) { 
Pic.SetActive(false);

 
}
}
 
 
 
  
 
function OnTriggerStay (col : Collider) {
 
  
        if(col.gameObject.tag == "attackArea") {
                 if(Input.GetKeyDown(KeyCode.Mouse0)) {
               
                    Pic.SetActive(true);
                     
                    AudioSource.PlayClipAtPoint(sound, transform.position);
                    }   
                 
                         
                     
                }
        }
