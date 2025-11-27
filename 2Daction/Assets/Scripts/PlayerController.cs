using Mono.Cecil.Cil;
using UnityEngine;

public class PlayerContoroller : MonoBehaviour
{
    public float speed=0.1f;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.W))
        {
            transform.Translate(0,speed,0);
        }
        if(Input.GetKey(KeyCode.S))
        {
            transform.Translate(0,speed*-1,0);
        }
        if(Input.GetKey(KeyCode.D))
        {
            transform.Translate(speed,0,0);
        }
        if(Input.GetKey(KeyCode.A))
        {
            transform.Translate(speed*-1,0,0);
        }
    }
}
