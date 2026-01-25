using TMPro;
using UnityEditor.Build.Content;
using UnityEngine;
using UnityEngine.SceneManagement;
public class GameDirector : MonoBehaviour
{
    GameObject timerText;
    GameObject pointText;
    float time=30.0f;
    public static int point=0;
    GameObject generator;
    public void GetApple()
    {
        point+=100;
    }
    public void GetBomb()
    {
        point/=2;
    }
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        this.timerText=GameObject.Find("Time");
        this.pointText=GameObject.Find("Point");
        this.generator=GameObject.Find("ItemGenerator");
    }

    // Update is called once per frame
    void Update()
    {
        this.time-=Time.deltaTime;
        this.timerText.GetComponent<TextMeshProUGUI>().text=this.time.ToString("F1");
        this.pointText.GetComponent<TextMeshProUGUI>().text=point.ToString()+" point";
        if(time<=0)
        {
            SceneManager.LoadScene("Result");
        }
        if(this.time<0)
        {
            this.time=0;
            this.generator.GetComponent<ItemGenerator>().SetParameter(10000.0f,0,0);
        }
        else if (0<=this.time && this.time<5)
        {
            this.generator.GetComponent<ItemGenerator>().SetParameter(0.2f,-0.08f,6);
        }
        else if (5<=this.time && this.time<10)
        {
            this.generator.GetComponent<ItemGenerator>().SetParameter(0.3f,-0.07f,5);
        }
        else if (10<=this.time && this.time<20)
        {
            this.generator.GetComponent<ItemGenerator>().SetParameter(0.4f,-0.06f,4);
        }
        else if (20<=this.time && this.time<30)
        {
            this.generator.GetComponent<ItemGenerator>().SetParameter(0.5f,-0.05f,3);
        }
    }
    public int Geterpoint()
    {
        return point;
    }
}
