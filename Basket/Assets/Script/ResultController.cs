using TMPro;
using UnityEditor.Build.Content;
using UnityEngine;
using UnityEngine.SceneManagement;
public class ResultController : MonoBehaviour
{
    public static GameDirector instance = new GameDirector();
    int result = instance.Geterpoint();
    GameObject resultText;
    TextMeshProUGUI UItext;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        this.resultText=GameObject.Find("Result");
        UItext= this.resultText.GetComponent<TextMeshProUGUI>();
    }

    // Update is called once per frame
    void Update()
    {
        UItext.text=this.result.ToString("F1");
        Debug.Log(instance);
        Debug.Log(instance.Geterpoint());
    }
}