package com.amsdams.tododatarest;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;
import java.io.FileWriter;
import java.io.Writer;

import org.apache.commons.io.IOUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;

@Import({SwaggerConfig.class, SpringDataRestConfiguration.class})


@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@EnableSwagger2WebMvc
public class SwaggerAPIIntegrationTest {
	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private TodoRepository repository;

	@Test
	public void swaggerJsonExists() throws Exception {
		String contentAsString = mockMvc.perform(MockMvcRequestBuilders.get("/v2/api-docs")
				.accept(MediaType.APPLICATION_JSON).param("group", "todo-api")).andExpect(status().isOk()).andReturn()
				.getResponse().getContentAsString();
		try (Writer writer = new FileWriter(new File("target/generated-sources/swagger.json"))) {
			IOUtils.write(contentAsString, writer);
		}
	}
}
